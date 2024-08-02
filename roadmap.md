# Road Map: Desenvolvimento da Área Administrativa (/manager)

## Regras da Aplicação
1. Não modificar `app/layout.tsx` ou `app/page.tsx`, pois são parte do site principal.
2. Utilizar sempre componentes do Shadcn UI para manter consistência visual.
3. Manter a área `/manager` completamente separada e protegida do resto do site.
4. Seguir as convenções de nomenclatura e estrutura de arquivos do Next.js 14.
5. Implementar autenticação e autorização para todas as rotas `/manager`, exceto a página de login.
6. Utilizar React Query para gerenciamento de estado do servidor e cache.
7. Manter o código comentado e seguir as melhores práticas de TypeScript.
8. Realizar testes regulares para garantir que as alterações em `/manager` não afetem o site principal.
9. Implementar tratamento de erros robusto em todas as operações de banco de dados e chamadas de API.
10. Manter o script de seed atualizado com dados de exemplo para todos os modelos principais, facilitando o desenvolvimento e testes.
11. Utilizamos o App Router não o Page Router

## Fase 1: Configuração Inicial e Estrutura Base
- [x] 1.1. Configuração do Projeto
  - [x] Criar diretório `/manager` dentro de `app/`
  - [x] Atualizar `tsconfig.json` para aliases de importação
  - [x] Verificar `next.config.js` para possíveis ajustes

- [x] 1.2. Configuração de Autenticação (Next-Auth)
  - [x] Instalar Next-Auth
  - [x] Criar `app/api/auth/[...nextauth]/route.ts`
  - [x] Implementar provider de credenciais
  - [x] Criar página de login em `app/manager/login/page.tsx` usando Shadcn UI
  - [x] Criar layout específico para página de login

- [x] 1.3. Middleware de Autenticação
  - [x] Criar `middleware.ts` na raiz do projeto para proteger rotas `/manager`
  - [x] Implementar redirecionamento para login quando não autenticado

- [x] 1.4. Configuração do Banco de Dados
  - [x] Instalar Prisma ORM
  - [x] Configurar Prisma para trabalhar com o banco de dados existente na King Host
  - [x] Definir modelos Prisma para User, Client, Payment, Appointment, e Blog
  - [x] Gerar e aplicar migrações do Prisma

- [x] 1.5. Layout Base e Navegação para /manager
  - [x] Implementar `app/manager/layout.tsx` usando componentes Shadcn UI
  - [x] Criar componentes de navegação específicos para área administrativa
  - [x] Implementar lógica de exibição condicional baseada no papel do usuário (Admin/Cliente)
  - [x] Ajustar layout para não exibir sidebar na página de login

- [x] 1.6. Configuração do Sistema de Notificações
  - [x] Instalar e configurar o Toast do Shadcn UI
  - [x] Criar um wrapper ou hook personalizado para uso consistente do Toast

## Fase 2: Desenvolvimento do Dashboard
- [x] 2.1. Página de Dashboard
  - [x] Criar `app/manager/page.tsx`
  - [x] Implementar layout responsivo do dashboard com Shadcn UI
  - [x] Criar versões diferentes do dashboard para Admin e Cliente

- [x] 2.2. Componentes do Dashboard
  - [x] Desenvolver widgets de resumo (KPIs) usando Shadcn UI
    - [x] Para Admin: Total de Clientes, Pagamentos Pendentes, Atendimentos Hoje, Publicações Ativas
    - [x] Para Cliente: Próximos Atendimentos, Pagamentos Pendentes (próprios), Publicações Visualizadas
  - [x] Criar gráficos de visão geral utilizando os Charts do Shadcn UI

- [x] 2.3. Integração de Dados do Dashboard
  - [x] Criar API routes para dados do dashboard em `app/api/manager/dashboard/route.ts`
  - [x] Implementar lógica de fetch de dados com React Query
  - [x] Adicionar lógica para filtrar dados baseado no papel do usuário
  - [x] Implementar gráfico de linha para pagamentos com dados reais do banco de dados

## Fase 3: Módulo de Clientes (Visível apenas para Admin)
- [ ] 3.1. Estrutura de Clientes
  - [ ] Criar `app/manager/clients/page.tsx` (listagem)
  - [ ] Implementar `app/manager/clients/[id]/page.tsx` (detalhes/edição)
  - [ ] Desenvolver `app/manager/clients/novo/page.tsx` (criação)

- [ ] 3.2. API de Clientes
  - [ ] Implementar CRUD em `app/api/manager/clients/route.ts`
  - [ ] Criar validação de dados com Zod
  - [ ] Adicionar paginação e filtros na listagem

- [ ] 3.3. Componentes de Cliente
  - [ ] Desenvolver formulário de cliente usando Shadcn UI
  - [ ] Criar tabela de listagem de clientes com ordenação usando Shadcn UI
  - [ ] Implementar modal de confirmação para exclusão

- [ ] 3.4. Lógica de Negócio de Clientes
  - [ ] Implementar regras de negócio específicas
  - [ ] Criar hooks personalizados para operações de cliente usando React Query

## Fase 4: Módulo de Pagamentos
- [ ] 4.1. Estrutura de Pagamentos
  - [ ] Criar `app/manager/payments/page.tsx` (listagem)
  - [ ] Implementar `app/manager/payments/[id]/page.tsx` (detalhes)
  - [ ] Desenvolver `app/manager/payments/novo/page.tsx` (registro)

- [ ] 4.2. API de Pagamentos
  - [ ] Implementar CRUD em `app/api/manager/payments/route.ts`
  - [ ] Adicionar lógica de cálculo e validação de pagamentos
  - [ ] Criar endpoints para relatórios de pagamento
  - [ ] Implementar filtros para mostrar apenas pagamentos relevantes para o usuário atual

- [ ] 4.3. Componentes de Pagamento
  - [ ] Desenvolver formulário de registro de pagamento usando Shadcn UI
  - [ ] Criar tabela de listagem de pagamentos com filtros usando Shadcn UI
  - [ ] Implementar componentes de visualização de relatórios

- [ ] 4.4. Lógica de Negócio de Pagamentos
  - [ ] Implementar cálculos de totais e balanços
  - [ ] Criar sistema de notificações para pagamentos pendentes
  - [ ] Adicionar lógica para diferenciar visualização/ações entre Admin e Cliente

## Fase 5: Módulo de Publicações (Blogs)
- [ ] 5.1. Estrutura de Publicações
  - [ ] Criar `app/manager/blogs/page.tsx` (listagem)
  - [ ] Implementar `app/manager/blogs/[id]/page.tsx` (edição)
  - [ ] Desenvolver `app/manager/blogs/nova/page.tsx` (criação)

- [ ] 5.2. API de Publicações
  - [ ] Implementar CRUD em `app/api/manager/blogs/route.ts`
  - [ ] Adicionar suporte a upload de imagens e arquivos
  - [ ] Criar endpoint para publicação/despublicação
  - [ ] Implementar lógica para controle de acesso baseado no papel do usuário

- [ ] 5.3. Editor de Publicações
  - [ ] Integrar editor rico (ex: TipTap ou Quill)
  - [ ] Implementar preview de publicações
  - [ ] Criar sistema de tags e categorias

- [ ] 5.4. Integração com Site Principal
  - [ ] Desenvolver API para consumo público das publicações
  - [ ] Implementar cache e otimização de queries
  - [ ] Criar componentes no site principal para exibir publicações

## Fase 6: Módulo de Atendimentos
- [ ] 6.1. Estrutura de Atendimentos
  - [ ] Criar `app/manager/appointments/page.tsx` (calendário)
  - [ ] Implementar `app/manager/appointments/[id]/page.tsx` (detalhes)
  - [ ] Desenvolver `app/manager/appointments/novo/page.tsx` (agendamento)

- [ ] 6.2. API de Atendimentos
  - [ ] Implementar CRUD em `app/api/manager/appointments/route.ts`
  - [ ] Adicionar lógica de verificação de conflitos de horário
  - [ ] Criar endpoints para relatórios de atendimentos
  - [ ] Implementar filtros para mostrar apenas atendimentos relevantes para o usuário atual

- [ ] 6.3. Calendário de Atendimentos
  - [ ] Integrar biblioteca de calendário compatível com Shadcn UI
  - [ ] Implementar modal de agendamento/edição
  - [ ] Criar sistema de cores para status de atendimentos
  - [ ] Adicionar lógica para diferenciar visualização/ações entre Admin e Cliente

- [ ] 6.4. Sistema de Notas/Prontuário
  - [ ] Desenvolver componente de adição de notas por atendimento
  - [ ] Implementar histórico de notas vinculado ao cliente e atendimento
  - [ ] Criar interface para visualização de notas anteriores durante novo atendimento
  - [ ] Implementar controle de acesso às notas baseado no papel do usuário

## Fase 7: Refinamento e Otimização
- [ ] 7.1. Gerenciamento de Estado e Cache
  - [ ] Configurar React Query para todos os módulos
  - [ ] Implementar estratégias de invalidação de cache
  - [ ] Otimizar queries do Prisma

- [ ] 7.2. Melhorias de UX/UI
  - [ ] Refinar componentes Shadcn UI
  - [ ] Implementar animações e transições
  - [ ] Criar temas claro/escuro para área administrativa

- [ ] 7.3. Testes
  - [ ] Escrever testes unitários para componentes críticos
  - [ ] Desenvolver testes de integração
  - [ ] Implementar testes end-to-end com Cypress

- [ ] 7.4. Otimização de Performance
  - [ ] Implementar lazy loading e code splitting
  - [ ] Otimizar carregamento de assets
  - [ ] Configurar caching no lado do servidor

## Fase 8: Segurança e Conformidade
- [ ] 8.1. Reforço de Segurança
  - [ ] Implementar CSRF protection
  - [ ] Configurar rate limiting para APIs
  - [ ] Realizar auditoria de segurança

- [ ] 8.2. Sistema de Logs e Auditoria
  - [ ] Implementar logging de ações críticas
  - [ ] Criar painel de auditoria para administradores
  - [ ] Configurar alertas de segurança

- [ ] 8.3. Conformidade e Privacidade
  - [ ] Implementar funcionalidades de GDPR (se aplicável)
  - [ ] Criar páginas de termos de uso e política de privacidade
  - [ ] Desenvolver sistema de consentimento de usuário

## Fase 9: Preparação para Produção
- [ ] 9.1. Configuração de Ambientes
  - [ ] Configurar ambiente de staging
  - [ ] Preparar scripts de deploy
  - [ ] Configurar variáveis de ambiente para produção na King Host

- [ ] 9.2. Documentação
  - [ ] Criar documentação técnica do projeto
  - [ ] Desenvolver guia de usuário para área administrativa
  - [ ] Documentar APIs para possível uso externo

- [ ] 9.3. Testes Finais e QA
  - [ ] Realizar testes de carga
  - [ ] Executar testes de aceitação do usuário (UAT)
  - [ ] Fazer revisão final de código e segurança

## Fase 10: Lançamento e Pós-Lançamento
- [ ] 10.1. Deploy para Produção
  - [ ] Executar migração final de banco de dados (se necessário)
  - [ ] Realizar deploy da aplicação para o servidor King Host
  - [ ] Configurar monitoramento e alertas

- [ ] 10.2. Monitoramento Inicial
  - [ ] Configurar dashboards de monitoramento
  - [ ] Implementar logging de erros (ex: Sentry)
  - [ ] Monitorar métricas de performance

- [ ] 10.3. Feedback e Iterações
  - [ ] Coletar feedback dos usuários iniciais
  - [ ] Priorizar e planejar melhorias pós-lançamento
  - [ ] Iniciar desenvolvimento de novas funcionalidades baseadas no feedback