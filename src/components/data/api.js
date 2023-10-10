const fetchSalahTimes = async (city) => {
  try {
    const response = await fetch(
      `https://api.aladhan.com/v1/timingsByCity?country=EG&city=${city}`
    );
    const data = await response.json();
    // console.log(data.data.timings);
    return data;
  } catch (error) {
    console.error("Error fetching Salah times:", error);
    throw error;
  }
};

export default fetchSalahTimes;
