const BASE_URL_AGIFY = 'https://api.agify.io?name='

export default async function getAgeByName (name: string): Promise<number | null>  {
  try {
    const response = await fetch(BASE_URL_AGIFY+name);
    if (response.ok) {
      const data = await response.json() as AgifyResponse;
      return data.age;
    }
    return null;
  } catch {
    return null;
  }
};