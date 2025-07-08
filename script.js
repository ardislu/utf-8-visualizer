// All invisible Unicode characters. Source:
// https://github.com/hediet/vscode-unicode-data
const invisibleCharacters = [9, 10, 11, 12, 13, 32, 127, 160, 173, 847, 1564, 4447, 4448, 6068, 6069, 6155, 6156, 6157, 6158, 7355, 7356, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8203, 8204, 8205, 8206, 8207, 8234, 8235, 8236, 8237, 8238, 8239, 8287, 8288, 8289, 8290, 8291, 8292, 8293, 8294, 8295, 8296, 8297, 8298, 8299, 8300, 8301, 8302, 8303, 10240, 12288, 12644, 65024, 65025, 65026, 65027, 65028, 65029, 65030, 65031, 65032, 65033, 65034, 65035, 65036, 65037, 65038, 65039, 65279, 65440, 65520, 65521, 65522, 65523, 65524, 65525, 65526, 65527, 65528, 65532, 78844, 119155, 119156, 119157, 119158, 119159, 119160, 119161, 119162, 917504, 917505, 917506, 917507, 917508, 917509, 917510, 917511, 917512, 917513, 917514, 917515, 917516, 917517, 917518, 917519, 917520, 917521, 917522, 917523, 917524, 917525, 917526, 917527, 917528, 917529, 917530, 917531, 917532, 917533, 917534, 917535, 917536, 917537, 917538, 917539, 917540, 917541, 917542, 917543, 917544, 917545, 917546, 917547, 917548, 917549, 917550, 917551, 917552, 917553, 917554, 917555, 917556, 917557, 917558, 917559, 917560, 917561, 917562, 917563, 917564, 917565, 917566, 917567, 917568, 917569, 917570, 917571, 917572, 917573, 917574, 917575, 917576, 917577, 917578, 917579, 917580, 917581, 917582, 917583, 917584, 917585, 917586, 917587, 917588, 917589, 917590, 917591, 917592, 917593, 917594, 917595, 917596, 917597, 917598, 917599, 917600, 917601, 917602, 917603, 917604, 917605, 917606, 917607, 917608, 917609, 917610, 917611, 917612, 917613, 917614, 917615, 917616, 917617, 917618, 917619, 917620, 917621, 917622, 917623, 917624, 917625, 917626, 917627, 917628, 917629, 917630, 917631, 917760, 917761, 917762, 917763, 917764, 917765, 917766, 917767, 917768, 917769, 917770, 917771, 917772, 917773, 917774, 917775, 917776, 917777, 917778, 917779, 917780, 917781, 917782, 917783, 917784, 917785, 917786, 917787, 917788, 917789, 917790, 917791, 917792, 917793, 917794, 917795, 917796, 917797, 917798, 917799, 917800, 917801, 917802, 917803, 917804, 917805, 917806, 917807, 917808, 917809, 917810, 917811, 917812, 917813, 917814, 917815, 917816, 917817, 917818, 917819, 917820, 917821, 917822, 917823, 917824, 917825, 917826, 917827, 917828, 917829, 917830, 917831, 917832, 917833, 917834, 917835, 917836, 917837, 917838, 917839, 917840, 917841, 917842, 917843, 917844, 917845, 917846, 917847, 917848, 917849, 917850, 917851, 917852, 917853, 917854, 917855, 917856, 917857, 917858, 917859, 917860, 917861, 917862, 917863, 917864, 917865, 917866, 917867, 917868, 917869, 917870, 917871, 917872, 917873, 917874, 917875, 917876, 917877, 917878, 917879, 917880, 917881, 917882, 917883, 917884, 917885, 917886, 917887, 917888, 917889, 917890, 917891, 917892, 917893, 917894, 917895, 917896, 917897, 917898, 917899, 917900, 917901, 917902, 917903, 917904, 917905, 917906, 917907, 917908, 917909, 917910, 917911, 917912, 917913, 917914, 917915, 917916, 917917, 917918, 917919, 917920, 917921, 917922, 917923, 917924, 917925, 917926, 917927, 917928, 917929, 917930, 917931, 917932, 917933, 917934, 917935, 917936, 917937, 917938, 917939, 917940, 917941, 917942, 917943, 917944, 917945, 917946, 917947, 917948, 917949, 917950, 917951, 917952, 917953, 917954, 917955, 917956, 917957, 917958, 917959, 917960, 917961, 917962, 917963, 917964, 917965, 917966, 917967, 917968, 917969, 917970, 917971, 917972, 917973, 917974, 917975, 917976, 917977, 917978, 917979, 917980, 917981, 917982, 917983, 917984, 917985, 917986, 917987, 917988, 917989, 917990, 917991, 917992, 917993, 917994, 917995, 917996, 917997, 917998, 917999];
const encoder = new TextEncoder();

customElements.define('al-point-visualization', class extends HTMLElement {
  connectedCallback() {
    const template = document.querySelector('template').content;
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.cloneNode(true));
  }
});

function calculateOutput(input) {
  const output = [];

  for (const char of input) {
    const point = char.codePointAt(0);
    output.push({
      char: invisibleCharacters.includes(point) ? '◌' : char, // Visual representation of the code point, replacing whitespace with ◌
      point: `U+${point.toString(16).toUpperCase()}`, // Unicode code point, in hex
      bytes: [...encoder.encode(char)].map(c => c.toString(2).padStart(8, '0')) // UTF-8 encoding of the code point, in binary
    });
  }

  return output;
}

function parseBytes(bytes) {
  // A UTF-8 encoded code point with a byte length of 1 is always encoded with this pattern: 0xxxxxxx
  // Do not mark first bit insignificant because the UTF-8 encoding is exactly equal to the code point binary
  if (bytes.length === 1) {
    return [bytes[0], bytes[0]];
  }

  // All other UTF-8 byte lengths follow the same pattern
  // Examples: 
  // Length = 3 bytes: 1110xxxx 10xxxxxx 10xxxxxx
  // Length = 4 bytes: 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
  // Length = 5 bytes: 111110xx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx
  else {
    let pointBinaryTemplate = '';
    let bytesTemplate = '';

    // The number of insignificant bits in the first byte is always the length of the array plus one
    const initialLength = bytes.length;
    const firstByte = bytes.shift();
    const i = firstByte.substring(0, initialLength + 1);
    const s = firstByte.substring(initialLength + 1);
    pointBinaryTemplate += `<span class="shrink w-${i.length}"></span>${s}`;
    bytesTemplate += `<span class="insignificant">${i}</span>${s}`;

    // Remaining bytes always have 2 insignificant bits
    for (const byte of bytes) {
      pointBinaryTemplate += `<span class="shrink w-2"></span>${byte.substring(2)}`;
      bytesTemplate += `<span class="insignificant">10</span>${byte.substring(2)}`;
    }

    return [pointBinaryTemplate, bytesTemplate];
  }
}

function render(output) {
  const vizContainer = document.getElementById('visualizations');
  vizContainer.innerHTML = '';

  let i = 1;
  for (const item of output) {
    const viz = document.createElement('al-point-visualization');
    viz.insertAdjacentHTML('beforeend', `<span slot="char">${item.char}</span>`);
    viz.insertAdjacentHTML('beforeend', `<span slot="point"><a href="https://codepoints.net/${item.point}">${item.point}</a></span>`);

    const [pointBinary, bytes] = parseBytes(item.bytes);
    viz.insertAdjacentHTML('beforeend', `<span slot="point-binary">${pointBinary}</span>`);
    viz.insertAdjacentHTML('beforeend', `<span slot="bytes">${bytes}</span>`);

    // Set a CSS variable to dynamically switch z-index stacking order
    // when required, so the hover popovers stay on top.
    viz.style.setProperty('--i', i);
    i++;

    vizContainer.insertAdjacentElement('beforeend', viz);
  }
}

function handleChange(value) {
  // Update URL with the input but do not spam the history
  const url = new URL(`?q=${value}`, window.location.origin);
  window.history.replaceState({}, '', url);
  document.title = `UTF-8 Visualizer: ${value}`;

  const output = calculateOutput(value);
  render(output);

  const count = encoder.encode(value).byteLength;
  document.querySelector('#count').textContent = `Total size: ${count} byte${count !== 1 ? 's' : ''}`;
}

const input = document.querySelector('input');
input.addEventListener('input', e => handleChange(e.target.value));
const q = new URL(document.location).searchParams.get('q');
input.value = (q === null || q === '') ? '🏴‍☠️' : q;
handleChange(input.value); // Render the default value on first load

addEventListener('keyup', e => {
  if (e.key === '/') { input.focus(); }
});
