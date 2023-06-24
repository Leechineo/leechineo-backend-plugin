const TicketErrors = {
  ticketNotElegible: (name) => ({
    error: 'ticket_not_elegible',
    message: `Você não é elegível para utilizar o cupom ${name}.`
  }),
  ticketNotExist: (name) => ({
    error: 'ticket_not_exist',
    message: `O cupom ${name} não existe.`
  }),
  ticketIdNotProvided: {
    error: 'ticket_id_not_provided',
    message: 'O ID do cupom não foi informado.'
  },
  ticketCantBeAppliedOnThisProduct: (name) => ({
    error: 'ticket_cant_be_applied_on_this_product',
    message: `O cupom ${name} não pode ser aplicado neste produto.`
  }),
  ticketCantBeAppliedOnCart: (name) => ({
    error: 'ticket_cant_be_applied_on_cart',
    message: `O cupom ${name} não pode ser aplicado no carrinho.`
  })
}

module.exports = TicketErrors
