import { request } from "../../utility/request";



const name = async () => {
  const data = await request(`https://data.ppy.sh/`, {
    method: 'GET',
  });


  const array = data.split('\n')
    .filter((r: string) => r.includes(`<a href='`))
    .map((r: string) => {
      const match = r.match(/href='([^']+)'/);
      return match ? `https://data.ppy.sh/${match[1]}` : null;
    })
    .filter((r: string) => r != null);


  return array;
};


export default name;