export type Feature = {
  title: string;
  description: string;
};

export const appConfig = {
  name: "Incopetencia",
  description: "Recomendar os funcionários mais inúteis de uma empresa",
  emoji: "🦥",
  accent: "#ea580c",
  upcomingFeatures: [
    {
      title: "Cadastro de funcionários",
      description: "Adicione funcionários com nome, cargo e equipe.",
    },
    {
      title: "Avaliações anônimas",
      description: "Colegas avaliam a contribuição uns dos outros de forma anônima.",
    },
    {
      title: "Ranking de inutilidade",
      description: "Veja a lista dos funcionários ordenada do menos ao mais útil.",
    },
    {
      title: "Métricas de entrega",
      description: "Acompanhe tarefas entregues, prazos perdidos e reuniões frequentadas.",
    },
    {
      title: "Resumo semanal",
      description: "Receba toda semana um resumo com as principais recomendações.",
    },
    {
      title: "Exportar relatório",
      description: "Baixe o ranking atual em um arquivo CSV.",
    },
  ] satisfies Feature[],
};
