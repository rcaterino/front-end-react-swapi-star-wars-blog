const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
	  vehicles: [],
    },
    actions: {
      getCharacters: async () => {
        const opts = {
          method: "GET",
        };
        try {
          const resp = await fetch("https://www.swapi.tech/api/people/", opts);
          if (resp.status !== 200) {
            new Error("error al cargar los personajes");
            return false;
          }
          const data = await resp.json();
          let receivedCharacters = data.results;
          setStore({ characters: receivedCharacters });
          return true;
        } catch (error) {
          console.log(error);
        }
      },
	  getVehicles: async () => {
        const opts = {
          method: "GET",
        };
        try {
          const resp = await fetch("https://www.swapi.tech/api/vehicles/", opts);
          if (resp.status !== 200) {
            new Error("error al cargar los vehiculos");
            return false;
          }
          const data = await resp.json();
          let receivedVehicles = data.results;
          setStore({ vehicles: receivedVehicles });
          return true;
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
