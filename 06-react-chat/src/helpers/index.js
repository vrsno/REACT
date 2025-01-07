export const formatDate = objDate => {
    if (!objDate || !objDate.seconds) return null; // O manejar el error de otra manera
    const date = new Date(objDate.seconds * 1000);

    const time = `${date.getHours()}:${date.getMinutes()}`

    const options = {
        month: "long",
        day: "numeric"
    }

    return date.toLocaleDateString("en-US", options) - time;
  }
  