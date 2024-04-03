function buildUrlAndParams(basePath, paramsObj) {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(paramsObj)) {
      if (value) {
        params.append(key, value);
      }
    }
    return `${basePath}${params.toString() ? `?${params.toString()}` : ''}`;
  }

  module.exports = buildUrlAndParams;