const fadeOutHeader = (headerCtrls) =>
  headerCtrls.start({
    y: [0, -300],
    opacity: [1, 0]
  });

const collapseTopFieldsAndButton = (topCtrls, btnCtrls) =>
  Promise.all([
    topCtrls.start((i) => ({
      y: 80 * i,
      transition: {
        delay: 0.1 * i
      }
    })),
    btnCtrls.start({
      y: -200
    })
  ]);

const stuffEnvelope = (topCtrls, msgCtrls, envelopeContainerCtrls) =>
  Promise.all([
    msgCtrls.start({
      scale: 0.81,
      originY: 0
    }),
    topCtrls.start({
      scale: 0.81,
      originY: 0
    }),
    envelopeContainerCtrls.start({
      opacity: 1,
      translateY: [300, 200, -100]
    })
  ]);

const closeEnvelope = (envelopeCtrls) =>
  envelopeCtrls.start((custom) => {
    if (custom === 'flap') {
      return {
        opacity: [1, 1, 1],
        originY: [1, 1, 1],
        rotateX: [0, 0, 180]
      };
    } else if (custom === 'back-flap') {
      return {
        opacity: [0, 0, 0]
      };
    }
    return {};
  });

const stampEnvelope = (stampCtrls) =>
  stampCtrls.start({
    opacity: 1,
    scale: 8,
    originX: 0,
    originY: 0,
    x: 73,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeIn'
    }
  });

const fadeOutFormFields = (topCtrls, btnCtrls, msgCtrls) =>
  Promise.all([
    topCtrls.start({ opacity: 0 }),
    btnCtrls.start({ opacity: 0 }),
    msgCtrls.start({ opacity: 0 })
  ]);

const dropHook = (hotlineCtrls, hookCtrls, windowHeight) =>
  Promise.all([
    hotlineCtrls.start({
      opacity: [1, 1, 1],
      y: [windowHeight * -1, 0, -50]
    }),
    hookCtrls.start({
      pathLength: [0, 0, 1]
    })
  ]);

const reelInEnvelope = (masterEnvelopeCtrls, hotlineCtrls) =>
  Promise.all([
    masterEnvelopeCtrls.start({
      y: [-100, -200, -5000],
      rotateZ: [0, -30, -30],
      originX: [1, 1, 1],
      originY: [0.25, 0.25, 0.25],
      transition: {
        duration: 1
      }
    }),
    hotlineCtrls.start({
      y: [-50, -200, -5000],
      transition: {
        duration: 1
      }
    })
  ]);

const sendAnimation = async (controls, windowHeight) => {
  // Collapsing the top fields and the submit btn into message field
  const {
    header,
    top,
    btn,
    msg,
    envelopeContainer,
    envelope,
    palmtree,
    hotline,
    hotlineHook,
    masterEnvelope
  } = controls;

  await fadeOutHeader(header);

  await collapseTopFieldsAndButton(top, btn);

  await stuffEnvelope(top, msg, envelopeContainer);

  await closeEnvelope(envelope);

  await stampEnvelope(palmtree);

  await fadeOutFormFields(top, btn, msg);

  await dropHook(hotline, hotlineHook, windowHeight);

  await reelInEnvelope(masterEnvelope, hotline);
};

export default sendAnimation;
