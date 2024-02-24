export const postData = (array: any[]) => {
  const data = array.map((data, index) => {
    return Object.entries(data).map(([key, value]) => {
      return `notifications[${index}][${key}]=${encodeURIComponent(value as any)}`;
    }).join('&');
  }).join('&');


  return data;
};