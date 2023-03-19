const safeJSON = (jsonString: string) => {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    return {};
  }
};

export { safeJSON };
