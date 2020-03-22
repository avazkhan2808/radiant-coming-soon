(() => {
  window.onload = () => {
    const tl = gsap.timeline({ defaults: { ease: Expo.easeOut } });
    gsap.registerPlugin(CSSRulePlugin);
    tl.to('.overlay-rocket', {
      duration: 2,
      yPercent: -200,
      delay: 1,
    });
    tl.to('.overlay', { duration: 2, yPercent: -100 }, '-=2');

    tl.from('.rocket-img', { duration: 1, translateY: 400, opacity: 0 }, '-=2');
    tl.from('.bar-inner', { duration: 2, height: 0 }, '-=2');
    tl.to(
      CSSRulePlugin.getRule('.heading:after'),
      {
        cssRule: { scaleY: 0 },
        duration: 1,
      },
      '-=1'
    );
    tl.to(
      CSSRulePlugin.getRule('.sub-heading:after'),
      {
        cssRule: { scaleY: 0 },
        duration: 0.8,
        delay: 0.5,
      },
      '-=1.5'
    );
    tl.from(
      '.form-group',
      { duration: 1, translateY: 50, ease: Back.easeOut, opacity: 0 },
      '-=.8'
    );

    // I know it's a mess
    const notifyBtn = document.querySelector('.form-group-btn');

    notifyBtn.addEventListener('click', (e) => {
      notifyBtn.textContent = 'Preparing...';
      notifyBtn.setAttribute('disabled', 'disabled');
      setTimeout(() => {
        notifyBtn.textContent = 'Sending...';
      }, 1000);
      tl.to('.rocket-img', { duration: 2, yPercent: -150, delay: 1 });
      tl.set('.rocket-img', { yPercent: 150 });
      tl.to('.rocket-img', { duration: 1, yPercent: 0 });
      setTimeout(() => {
        notifyBtn.textContent = 'Sent!';
        setTimeout(() => {
          notifyBtn.textContent = 'Notify me!';
          notifyBtn.removeAttribute('disabled');
        }, 1000);
      }, 3000);
    });
  };
})();
