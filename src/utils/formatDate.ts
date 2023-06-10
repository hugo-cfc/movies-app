const formatDate = (date: string) => {
  const parts = date.split("-");
  const month = parseInt(parts[1]);
  const day = parseInt(parts[2]);

  const monthName = {
    "1": "Janeiro",
    "01": "Janeiro",
    "2": "Fevereiro",
    "02": "Fevereiro",
    "3": "Março",
    "03": "Março",
    "4": "Abril",
    "04": "Abril",
    "5": "Maio",
    "05": "Maio",
    "6": "Junho",
    "06": "Junho",
    "7": "Julho",
    "07": "Julho",
    "8": "Agosto",
    "08": "Agosto",
    "9": "Setembro",
    "09": "Setembro",
    "10": "Outubro",
    "11": "Novembro",
    "12": "Dezembro",
  }[month];

  const formatedDate = `${day} de ${monthName}`;

  return formatedDate;
};

export default formatDate;
