const wait = (ms) => {
  const start = Date.now();
  let now = start;

  while (now - start < ms) now = Date.now();
};

export const VerySlowComponent = () => {
  wait(500);
  return null;
};

export const AnotherVerySlowComponent = () => {
  wait(500);
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
      molestiae ipsa voluptates cum maxime dignissimos dicta natus? Eos
      blanditiis rerum, odit sed ut reprehenderit quod ipsam molestias quisquam
      libero. Error!
    </div>
  );
};
