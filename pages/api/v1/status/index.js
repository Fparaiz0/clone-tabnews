function status(request, response) {
  response.status(200).json({ chave: "Minha primeira API" });
}

export default status;
