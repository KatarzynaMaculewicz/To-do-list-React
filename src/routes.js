export const toTasks = () => '/zadania';
export const toHints = () => '/wskazowki';

export const toTask = ({ id } = { id: ":id" }) => `/zadania/${id}`;