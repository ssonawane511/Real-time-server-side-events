export const connectServerStream = () => {
   return new EventSource('http://localhost:4000/stream');
};