module.exports = function(appName, envVarCoverageToggleName, pathToRawFiles, pathToCoveredFiles) {
  if (envVarCoverageToggleName == null) {
    envVarCoverageToggleName = '';
  }
  if (pathToRawFiles == null) {
    pathToRawFiles = '';
  }
  if (pathToCoveredFiles == null) {
    pathToCoveredFiles = '';
  }
  return function(moduleName) {
    var modulePath, modulesPath;
    if (envVarCoverageToggleName === '') {
      envVarCoverageToggleName = "" + appName + "_cov";
    }
    if (pathToRawFiles === '') {
      pathToRawFiles = "../" + appName;
    }
    if (pathToCoveredFiles === '') {
      pathToCoveredFiles = "../" + appName + "_cov";
    }
    modulesPath = process.env[envVarCoverageToggleName] != null ? pathToCoveredFiles : pathToRawFiles;
    modulePath = "" + modulesPath + "/" + moduleName;
    return require(modulePath);
  };
};
