const BASE_URL_CATFACT = 'https://catfact.ninja/fact';

export default async function getCatFact (): Promise<string | null>  {
  try {
    const response = await fetch(BASE_URL_CATFACT);
    if (response.ok) {
      const  data  = await response.json()
      return data.fact;
    }
    return null;
  } catch {
    return null;
  }
};