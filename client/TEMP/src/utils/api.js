export const connectServerStream = () => {
   return new EventSource('http://iot-backend:4000/stream');
};