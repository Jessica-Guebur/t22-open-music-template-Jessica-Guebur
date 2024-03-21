export function applyInputRangeStyle() {
    const inputRange = document.querySelector("seu_seletor_do_input_range_aqui");
  
    inputRange.addEventListener("input", (event) => {
      const currentInputValue = event.target.value;
      const runnableTrackProgress = (currentInputValue / inputRange.max) * 100;
  
      inputRange.style.background = `linear-gradient(to right, var(--sua-cor-primaria) ${runnableTrackProgress}%, var(--sua-cor-cinza-5) ${runnableTrackProgress}%)`;
    });
  }

  applyInputRangeStyle()