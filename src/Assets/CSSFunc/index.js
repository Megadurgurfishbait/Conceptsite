
export const Scrollbar = `
overflow-y: scroll;
overflow-x: hidden;
&::-webkit-scrollbar {
  width: 5px; 
       
}

&::-webkit-scrollbar-track {
  box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.3);
  border-radius: 10px;

}

&::-webkit-scrollbar-thumb {
  background-color: darkgray;
  outline: 1px solid slategrey;
  border-radius: 10px;
}`;