const useDebounce = () => {
  const debounce = (func: any) => {
    let timer: any;
    return function (...args: any) {
      const context: any = this;
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    }
  }

  return debounce;
};

export default useDebounce;
