

// export default {
//   handleFlashFireClick: function(e) {
//     e.preventDefault();
//     window.open('http://3.137.200.234/');
//   },
//   handleYoutubeChannelClick: function(e) {
//     e.preventDefault();
//     window.open('https://www.youtube.com/channel/UCvL509Dm5ZfVnWNYpblFyRg');
//   },
//   handleCertsHackReactor: function(e) {
//     e.preventDefault();
//     window.open(path.join(__dirname, 'dist', 'assets', 'hackReactor.png'));
//   },
//   handleCertsPreSecurity: function(e) {
//     e.preventDefault();
//     window.open(path.join(__dirname, 'dist', 'assets', 'thm-presecurity-cert.png'));
//   }
// }

export function handleFlashFireClick(e) {
  e.preventDefault();
  window.open('http://3.137.200.234/');
}

export function handleYoutubeChannelClick(e) {
  e.preventDefault();
  window.open('https://www.youtube.com/channel/UCvL509Dm5ZfVnWNYpblFyRg');
}

export function handleCertsHackReactor(e) {
  e.preventDefault();
  window.open('../../dist/assets/hackReactor.pdf');
}

export function handleCertsPreSecurity(e) {
  e.preventDefault();
  window.open();
}

export default {
  handleFlashFireClick,
  handleYoutubeChannelClick,
  handleCertsHackReactor,
  handleCertsPreSecurity,
}