const AuthErrors = {
  loginRequired: {
    error: 'login_required',
    message: 'Entre com sua conta para continuar.'
  },
  invalidCredentials: {
    error: 'invalid_credentials',
    message: 'Os dados informados não são válidos.'
  },
  minAgeRequired: {
    error: 'min_age_required',
    message: 'Você deve ter pelo menos 15 anos para criar uma conta.'
  },
  emailAlreadyInUse: {
    error: 'email_already_in_use',
    message: 'Este email já está em uso.'
  },
  cpfAlreadyInUse: {
    error: 'cpf_already_in_use',
    message: 'Este CPF já está em uso.'
  },
  emailAlreadyVerified: {
    error: 'email_already_verified',
    message: 'Seu Email já está verificado.'
  },
  emailCpfOrPasswordInvalid: {
    error: 'email_cpf_password_invalid',
    message: 'Email, CPF ou senha inválidos.'
  },
  tokenNotProvided: {
    error: 'token_not_provided',
    message: 'O token não foi informado'
  }
}

module.exports = AuthErrors
