for (var index = 0; index < 5; index++) {
  ((i) => {
    setTimeout(() => {
      console.log(i);
    }, 0);
  })(index);
}
