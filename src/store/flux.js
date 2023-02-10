const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
    },
    actions: {
      getCharacters: async () => {
        //console.log("ejecutando getCharacters desde actions:...");
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
    },
  };
};

export default getState;
