export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export const items = {
  hidden: { opacity: 0, translateX: -2, scale: 0.9 },
  show: { opacity: 1, translateX: 0, scale: 1 },
};
