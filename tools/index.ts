export const postDataArray = (field_name: string, array: any[]) => {
  const data = array.map((data, index) => {
    return postDataObject(`${field_name}[${index}]`, data);
  }).join('&');


  return data;
};

export const postDataObject = (field_name: string, object: object) => {
  return Object.entries(object).map(([key, value]) => {
    if (field_name == '')
      return `${key}=${encodeURIComponent(value as any)}`;

    return `${field_name}[${key}]=${encodeURIComponent(value as any)}`;
  }).join('&');
};