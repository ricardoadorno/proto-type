const contactsAppExample = `screen ContactsList:
  header:
    ### Lista de Contatos
    @[Menu](MainDrawer)

  col:
    > Seus contatos estão organizados aqui
    
    list:
      - João Silva{(11) 99999-9999 • joao@email.com}@[Edit](EditContact)@=[Trash](ConfirmDelete)
      - Maria Santos{(11) 88888-8888 • maria@email.com}@[Edit](EditContact)@=[Trash](ConfirmDelete)
      - Pedro Oliveira{(11) 77777-7777 • pedro@email.com}@[Edit](EditContact)@=[Trash](ConfirmDelete)
      - Ana Costa{(11) 66666-6666 • ana@email.com}@[Edit](EditContact)@=[Trash](ConfirmDelete)

  fab {Plus} CreateContact


modal CreateContact:
    # Novo Contato
    
    ___:Nome{Digite o nome}
    ___:Telefone{(11) 99999-9999}
    ___:Email{email@exemplo.com}
    
    row:
      @[Cancelar](ContactsList)
      @[Salvar](ContactsList)

modal EditContact:
    # Editar Contato
    
    ___:Nome{João Silva}
    ___:Telefone{(11) 99999-9999}
    ___:Email{joao@email.com}
    
    row:
      @[Cancelar](ContactsList)
      @[Salvar](ContactsList)

modal ConfirmDelete:
    # Confirmar Exclusão
    > Tem certeza que deseja excluir este contato?
    
    *> Esta ação não pode ser desfeita.
    
    row:
      @[Cancelar](ContactsList)
      @[Excluir](ContactsList)

drawer MainDrawer:
  - [Contatos]{Users}(ContactsList)
  - [Favoritos]{Star}(Favorites)
  - [Grupos]{Users2}(Groups)
  - [Configurações]{Settings}(Settings)
  - [Sobre]{Info}(About)
  - [Ajuda]{HelpCircle}(Help)

screen Favorites:
  header:
    > Favoritos
    @[Menu](MainDrawer)

  col:
    *> Nenhum contato favoritado ainda
    
    > Adicione contatos aos favoritos tocando na estrela ao lado do nome.

screen Groups:
  header:
    > Grupos
    @[Menu](MainDrawer)

  col:
    > Organize seus contatos em grupos
    
    list:
      - Família{5 contatos}
      - Trabalho{12 contatos}
      - Amigos{8 contatos}

screen Settings:
  header:
    > Configurações
    @[Menu](MainDrawer)

  col:
    # Configurações da Conta
    
    list:
      - Sincronização
      - Backup automático
      - Importar contatos
      - Exportar contatos
    
    # Aparência
    
    list:
      - Tema escuro
      - Tamanho da fonte
      - Idioma

screen About:
  header:
    > Sobre
    @[Menu](MainDrawer)

  col:
    # Contatos App
    
    > Versão 1.0.0
    
    > Desenvolvido para gerenciar seus contatos de forma simples e eficiente.
    
    *> © 2025 Todos os direitos reservados

screen Help:
  header:
    > Ajuda
    @[Menu](MainDrawer)

  col:
    # Como usar
    
    list:
      - Adicionar contato{Toque no botão + para criar um novo contato}
      - Editar contato{Toque no ícone de edição ao lado do contato}
      - Excluir contato{Toque no ícone da lixeira e confirme a exclusão}
      - Organizar em grupos{Acesse a seção Grupos no Menu lateral}
`;

export default contactsAppExample;