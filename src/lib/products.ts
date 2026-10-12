export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
  image: string;
  description: string;
  featured?: boolean;
  specs: {
    dimensions: string;
    weight: string;
    materials: string;
    power: string;
  };
}

export const categories = [
  'All',
  'Calculator',
  'Clock',
  'Gaming',
  'Radio',
  'Recorder',
  'Speaker'
] as const;

export type Category = typeof categories[number];

export const products: Product[] = [
  {
    "id": "they-re-radio-p77",
    "slug": "they-re-radio-p77",
    "name": "They-re Radio P77",
    "category": "Radio",
    "price": 179,
    "inStock": true,
    "image": "/products/C67lEKfFEQ9Ao4GMknVpRjdQSPo.png",
    "description": "They-re Radio P77 is our powerful 3 channel stereo mixer with built-in equalizer, filters, compressor, aux send, cue and digital effects. this ultra-portable mixer can also be used as a multi-channel usb-c audio interface. constructed in anodized aluminum with pu leather backing.\n\n3.5 mm mini jack to 5.2 mm jack adapter\n\ncompatible with iOS devices (MFi)\n\nrechargeable battery\n\ncasing: aluminum 6063 with pu leather back\n\nmultichannel for Mac OS, currently only 2 channel for Windows.\n\nbuilt-in table stand\n\nFree shipping on all orders!\n\nIn Stock\n\n$79\n\nCalc 9000\n\nOut of Stock\n\n$189\n\nPeeuriva 24-T4\n\n$399\n\nClock Orange O2\n\n$199\n\nRadion Y-01\n\nFAQ\n\nReturns Policy\n\nTerms and Conditions\n\nContact",
    "featured": true,
    "specs": {
      "dimensions": "180 × 110 × 45 mm",
      "weight": "480g",
      "materials": "Anodized Aluminum, ABS Polymer",
      "power": "Rechargeable Lithium-ion / Type-C"
    }
  },
  {
    "id": "radion-t28",
    "slug": "radion-t28",
    "name": "Radion T28",
    "category": "Radio",
    "price": 129,
    "inStock": true,
    "image": "/products/J2eFqmrs2I831EXbJfBQyNaMI.png",
    "description": "Tune into nostalgia with the SonicWave AM/FM Radio. Compact, stylish, and easy to use, this radio brings your favorite stations to life with clear and crisp sound.\n\nFeatures:\n\nAM/FM Frequency Bands\n\nAnalog Tuner for Precise Dialing\n\nHigh-Resolution LED Display\n\nTelescopic Antenna for Enhanced Reception\n\nCompact and Portable Design\n\nFree shipping on all orders!\n\nIn Stock\n\n$79\n\nCalc 9000\n\nOut of Stock\n\n$189\n\nPeeuriva 24-T4\n\n$399\n\nClock Orange O2\n\n$199\n\nRadion Y-01\n\nFAQ\n\nReturns Policy\n\nTerms and Conditions\n\nContact",
    "featured": true,
    "specs": {
      "dimensions": "180 × 110 × 45 mm",
      "weight": "480g",
      "materials": "Anodized Aluminum, ABS Polymer",
      "power": "Rechargeable Lithium-ion / Type-C"
    }
  },
  {
    "id": "ther-radio-0x-yp",
    "slug": "ther-radio-0x-yp",
    "name": "Clock Orange O2",
    "category": "Clock",
    "price": 399,
    "inStock": false,
    "image": "/products/dlSQBjwpKaHj9r2I3UFrWjaddak.png",
    "description": "The Clock Orange O2 is a striking fusion of retro aesthetics and futuristic design. With its bold orange hue and sleek metallic accents, this clock redefines timekeeping for the modern home or workspace. Inspired by the sci-fi classic âA Clockwork Orange,â its minimalist display and geometric form make it a statement piece that brings a nostalgic yet forward-thinking vibe to any setting.\n\nKey Features:â¢ Futuristic Retro Design: Merges retro charm with a modern edge, perfect for stylish interiors.â¢ Geometric LED Display: A clean, energy-efficient LED screen that displays time in bold, easy-to-read numbers.â¢ Customizable Lighting: Adjustable brightness levels to fit any mood, from soft ambient glow to a bright centerpiece.â¢ Touch Controls: Simple, intuitive touch-sensitive controls for adjusting time and settings.â¢ Wireless Charging Pad: Equipped with a sleek, built-in wireless charger for your smartphone or other devices.\n\nFree shipping on all orders!\n\nIn Stock\n\n$79\n\nCalc 9000\n\nOut of Stock\n\n$189\n\nPeeuriva 24-T4\n\n$199\n\nRadion Y-01\n\nFAQ\n\nReturns Policy\n\nTerms and Conditions\n\nContact",
    "featured": false,
    "specs": {
      "dimensions": "180 × 110 × 45 mm",
      "weight": "480g",
      "materials": "Anodized Aluminum, ABS Polymer",
      "power": "Rechargeable Lithium-ion / Type-C"
    }
  },
  {
    "id": "radion-y-01",
    "slug": "radion-y-01",
    "name": "Radion Y-01",
    "category": "Radio",
    "price": 199,
    "inStock": true,
    "image": "/products/mTzSE6KF0SZuuB0yuiIuLJScuYo.png",
    "description": "Radion Y-01 is a nostalgic tribute to vintage radios, reimagined with modern technology. With its sleek wood-finish body, metallic dials, and digital enhancements, this radio is a perfect blend of timeless design and cutting-edge audio performance. Whether youâre tuning into your favorite FM station or streaming via Bluetooth, the RetroWave R7 delivers rich sound in a stylish package that complements any room.\n\nKey Features:\n\nâ¢ Classic Vintage Design: A wood-finished exterior and metal accents, bringing back the charm of classic radios with a modern twist.\n\nâ¢ Crystal Clear Sound: High-quality stereo speakers deliver deep bass and crisp treble for a superior audio experience.\n\nâ¢ Bluetooth Connectivity: Seamlessly switch from radio to your personal playlist with easy Bluetooth pairing.\n\nâ¢ FM/AM Tuner: Enjoy traditional radio with precise tuning and crystal-clear reception.\n\nâ¢ Rechargeable Battery: Built-in rechargeable battery for up to 12 hours of wireless play, perfect for on-the-go use.\n\nâ¢ Analog Dial: Authentic analog tuning knob for a nostalgic feel combined with modern functionality.\n\nFree shipping on all orders!\n\nIn Stock\n\n$79\n\nCalc 9000\n\nOut of Stock\n\n$189\n\nPeeuriva 24-T4\n\n$399\n\nClock Orange O2\n\nFAQ\n\nReturns Policy\n\nTerms and Conditions\n\nContact",
    "featured": false,
    "specs": {
      "dimensions": "180 × 110 × 45 mm",
      "weight": "480g",
      "materials": "Anodized Aluminum, ABS Polymer",
      "power": "Rechargeable Lithium-ion / Type-C"
    }
  },
  {
    "id": "proto-t-52",
    "slug": "proto-t-52",
    "name": "Proto T 52",
    "category": "Radio",
    "price": 99,
    "inStock": false,
    "image": "/products/iqlO85MtzwaDJDynNJM1ZwWvNys.png",
    "description": "Proto T 52 brings timeless elegance to your listening experience. Its classic wood-finish body and sleek metallic accents evoke the charm of vintage radios, while modern features like Bluetooth connectivity and crystal-clear sound elevate it for todayâs audiophiles. Whether tuning into your favorite stations or streaming music wirelessly, the RetroWave R7 delivers rich, immersive sound in a design that seamlessly blends nostalgia with modern functionality.\n\nFree shipping on all orders!\n\nIn Stock\n\n$79\n\nCalc 9000\n\nOut of Stock\n\n$189\n\nPeeuriva 24-T4\n\n$399\n\nClock Orange O2\n\n$199\n\nRadion Y-01\n\nFAQ\n\nReturns Policy\n\nTerms and Conditions\n\nContact",
    "featured": false,
    "specs": {
      "dimensions": "180 × 110 × 45 mm",
      "weight": "480g",
      "materials": "Anodized Aluminum, ABS Polymer",
      "power": "Rechargeable Lithium-ion / Type-C"
    }
  },
  {
    "id": "radiot-p52",
    "slug": "radiot-p52",
    "name": "Radiot P52",
    "category": "Radio",
    "price": 299,
    "inStock": true,
    "image": "/products/Bh5yiJhSRHnGMNKs3ITKN7R1rq4.png",
    "description": "The Radiot P52 is designed for gamers who demand precision and comfort. Featuring a sleek, ergonomic design with customizable buttons and ultra-responsive triggers, this controller ensures you stay ahead of the competition. Its textured grips and adaptive feedback create an immersive gaming experience, whether youâre playing on a console or PC. With wireless connectivity and long battery life, the HyperGrip X5 delivers the perfect balance of performance and comfort for extended gaming sessions.\n\nFree shipping on all orders!\n\nIn Stock\n\n$79\n\nCalc 9000\n\nOut of Stock\n\n$189\n\nPeeuriva 24-T4\n\n$399\n\nClock Orange O2\n\n$199\n\nRadion Y-01\n\nFAQ\n\nReturns Policy\n\nTerms and Conditions\n\nContact",
    "featured": false,
    "specs": {
      "dimensions": "180 × 110 × 45 mm",
      "weight": "480g",
      "materials": "Anodized Aluminum, ABS Polymer",
      "power": "Rechargeable Lithium-ion / Type-C"
    }
  },
  {
    "id": "ax-34-deck",
    "slug": "ax-34-deck",
    "name": "AX-34 Deck",
    "category": "Speaker",
    "price": 159,
    "inStock": true,
    "image": "/products/UzlqqmSBYDe3mG46DVCNbucgg.png",
    "description": "The VinylCraft V10 combines vintage charm with modern audio technology, delivering an unparalleled listening experience for vinyl enthusiasts. Its sleek wooden base, retro-inspired design, and precision-engineered components make it both a beautiful centerpiece and a high-performance turntable. Featuring adjustable speeds, built-in speakers, and Bluetooth connectivity, the VinylCraft V10 offers the perfect blend of classic sound and modern convenience, allowing you to enjoy your vinyl collection with rich, authentic audio.\n\nFree shipping on all orders!\n\nIn Stock\n\n$79\n\nCalc 9000\n\nOut of Stock\n\n$189\n\nPeeuriva 24-T4\n\n$399\n\nClock Orange O2\n\n$199\n\nRadion Y-01\n\nFAQ\n\nReturns Policy\n\nTerms and Conditions\n\nContact",
    "featured": true,
    "specs": {
      "dimensions": "180 × 110 × 45 mm",
      "weight": "480g",
      "materials": "Anodized Aluminum, ABS Polymer",
      "power": "Rechargeable Lithium-ion / Type-C"
    }
  },
  {
    "id": "pocket-play-x-rp-console",
    "slug": "pocket-play-x-rp-console",
    "name": "Pocket Play X-RP",
    "category": "Gaming",
    "price": 279,
    "inStock": true,
    "image": "/products/amf7AUxXbx8JQqjTSxSa86sHI1Q.png",
    "description": "Enter the world of gaming on the go with the PocketPlay Console. This sleek, portable gaming device offers a rich gaming experience with a library of exciting titles, all in the palm of your hand.\n\nFeatures:\n\nCompact Gaming: Experience console-quality gaming in a handheld device.\n\nVibrant Display: Enjoy games on a high-resolution screen.\n\nButton Controls: Responsive physical controls for precise gaming.\n\nWireless Connectivity: Multiplayer gaming and online updates.\n\nExpandable Storage: Add more games with ease.\n\nFree shipping on all orders!\n\nIn Stock\n\n$79\n\nCalc 9000\n\nOut of Stock\n\n$189\n\nPeeuriva 24-T4\n\n$399\n\nClock Orange O2\n\n$199\n\nRadion Y-01\n\nFAQ\n\nReturns Policy\n\nTerms and Conditions\n\nContact",
    "featured": false,
    "specs": {
      "dimensions": "180 × 110 × 45 mm",
      "weight": "480g",
      "materials": "Anodized Aluminum, ABS Polymer",
      "power": "Rechargeable Lithium-ion / Type-C"
    }
  },
  {
    "id": "sp-4-radio",
    "slug": "sp-4-radio",
    "name": "SP-4 Radio",
    "category": "Speaker",
    "price": 149,
    "inStock": true,
    "image": "/products/sf2RXVteaVIKZ4CMMDuy5OxJgFw.png",
    "description": "Elevate your auditory experience with the VibeBox Speaker. This compact, stylish speaker packs a punch with immersive sound quality, ensuring you have your favorite tunes with you wherever you go.\n\nFeatures:\n\n360Â° Sound: Enjoy all-encompassing audio.\n\nBluetooth Sync: Connect wirelessly to your devices.\n\nExtended Playtime: Keep the music going for hours.\n\nSplash-Proof: Designed to withstand light moisture.\n\nDurable Build: Built tough for your adventures.\n\nHands-Free Calls: Make and take calls effortlessly.\n\nFree shipping on all orders!\n\nIn Stock\n\n$79\n\nCalc 9000\n\nOut of Stock\n\n$189\n\nPeeuriva 24-T4\n\n$399\n\nClock Orange O2\n\n$199\n\nRadion Y-01\n\nFAQ\n\nReturns Policy\n\nTerms and Conditions\n\nContact",
    "featured": false,
    "specs": {
      "dimensions": "180 × 110 × 45 mm",
      "weight": "480g",
      "materials": "Anodized Aluminum, ABS Polymer",
      "power": "Rechargeable Lithium-ion / Type-C"
    }
  },
  {
    "id": "sonicwave-x1-radio",
    "slug": "sonicwave-x1-radio",
    "name": "SonicWave X1",
    "category": "Speaker",
    "price": 199,
    "inStock": false,
    "image": "/products/9IuqsvqmUCrbEJwmzoNFxDgt5U.png",
    "description": "Experience unparalleled sound on-the-go with the SonicWave X1 Portable Speaker. This compact powerhouse is engineered to deliver rich, immersive audio wherever you are, making it the ultimate companion for music enthusiasts and adventurers alike.\n\nFeatures:\n\nImmersive Audio: Enjoy stunning, 360-degree sound quality.\n\nBluetooth Connectivity: Seamlessly pair with your devices wirelessly.\n\nLong-Lasting Battery: Keep the music playing with extended battery life.\n\nWaterproof Design: Built to withstand splashes and outdoor conditions.\n\nDurable Build: Crafted for durability, ready for your adventures.\n\nFree shipping on all orders!\n\nIn Stock\n\n$79\n\nCalc 9000\n\nOut of Stock\n\n$189\n\nPeeuriva 24-T4\n\n$399\n\nClock Orange O2\n\n$199\n\nRadion Y-01\n\nFAQ\n\nReturns Policy\n\nTerms and Conditions\n\nContact",
    "featured": false,
    "specs": {
      "dimensions": "180 × 110 × 45 mm",
      "weight": "480g",
      "materials": "Anodized Aluminum, ABS Polymer",
      "power": "Rechargeable Lithium-ion / Type-C"
    }
  },
  {
    "id": "calc-9000",
    "slug": "calc-9000",
    "name": "Calc 9000",
    "category": "Calculator",
    "price": 79,
    "inStock": true,
    "image": "/products/NjETYEJv2gTFoNCccRUMElCkPg.png",
    "description": "Introducing the QuantumCalc 9000, the pinnacle of calculator technology. This sleek and powerful calculator is designed to simplify complex calculations and enhance your mathematical prowess.\n\nFeatures:\n\nAdvanced Computing: Perform intricate calculations with ease.\n\nHigh-Resolution Display: View results in crystal-clear clarity.\n\nTouchscreen Interface: Navigate intuitively with the responsive touchscreen.\n\nGraphing Capabilities: Plot graphs and analyze functions effortlessly.\n\nProgrammable Functions: Customize your calculator to suit your needs.\n\nFree shipping on all orders!\n\nOut of Stock\n\n$189\n\nPeeuriva 24-T4\n\n$399\n\nClock Orange O2\n\nIn Stock\n\n$199\n\nRadion Y-01\n\nFAQ\n\nReturns Policy\n\nTerms and Conditions\n\nContact",
    "featured": true,
    "specs": {
      "dimensions": "180 × 110 × 45 mm",
      "weight": "480g",
      "materials": "Anodized Aluminum, ABS Polymer",
      "power": "Rechargeable Lithium-ion / Type-C"
    }
  },
  {
    "id": "neochrono-console",
    "slug": "neochrono-console",
    "name": "NeoChrono Console",
    "category": "Gaming",
    "price": 399,
    "inStock": false,
    "image": "/products/FVlTCVAMDL4uYxEnpzFQyoZrNZo.png",
    "description": "Embark on a futuristic gaming journey with the NeoChrono XEON RevoGamer. This cutting-edge console redefines gaming, fusing state-of-the-art technology with a nod to the past, delivering an unparalleled gaming escapade.\n\nHyper-Reality Display: Explore games in hyper-realistic, immersive environments.\n\nNostalgiaTouch Controls: Touch-responsive controls that evoke nostalgia.\n\nTemporalSave Technology: Seamlessly jump in and out of gaming timelines.\n\nInfinitySync Expansion: Expand storage infinitely for your game collection.\n\nMultiverse Compatibility: Traverse games from parallel gaming universes.\n\nQuantumLink Wireless: Lag-free wireless connections for ultra-responsive play.\n\nFree shipping on all orders!\n\nIn Stock\n\n$79\n\nCalc 9000\n\nOut of Stock\n\n$189\n\nPeeuriva 24-T4\n\n$399\n\nClock Orange O2\n\n$199\n\nRadion Y-01\n\nFAQ\n\nReturns Policy\n\nTerms and Conditions\n\nContact",
    "featured": false,
    "specs": {
      "dimensions": "180 × 110 × 45 mm",
      "weight": "480g",
      "materials": "Anodized Aluminum, ABS Polymer",
      "power": "Rechargeable Lithium-ion / Type-C"
    }
  },
  {
    "id": "recordio-zt-1",
    "slug": "recordio-zt-1",
    "name": "Recordio ZT 1",
    "category": "Recorder",
    "price": 99,
    "inStock": true,
    "image": "/products/0s6mPyGAVm85FLM7Z7vvtGQYEZ4.png",
    "description": "Capture crystal-clear audio with our High-Quality Digital Audio Recorder. Whether you're a musician, journalist, or simply recording memories, this device ensures exceptional sound quality and user-friendly experience.\n\nPremium Sound: Record audio in stunning clarity and depth.\n\nIntuitive Interface: User-friendly design for effortless operation.\n\nVersatile Recording: Ideal for interviews, music, lectures, and more.\n\nNoise Reduction: Minimize background interference for pristine recordings.\n\nMultiple Formats: Save recordings in various formats like MP3, WAV, and FLAC.\n\nAmple Storage: Generous storage capacity to hold hours of recordings.\n\nLong Battery Life: Record for extended periods without worrying about power.\n\nBuilt-in Microphones: High-fidelity built-in mics for convenience.\n\nFree shipping on all orders!\n\nIn Stock\n\n$79\n\nCalc 9000\n\nOut of Stock\n\n$189\n\nPeeuriva 24-T4\n\n$399\n\nClock Orange O2\n\n$199\n\nRadion Y-01\n\nFAQ\n\nReturns Policy\n\nTerms and Conditions\n\nContact",
    "featured": false,
    "specs": {
      "dimensions": "180 × 110 × 45 mm",
      "weight": "480g",
      "materials": "Anodized Aluminum, ABS Polymer",
      "power": "Rechargeable Lithium-ion / Type-C"
    }
  },
  {
    "id": "gamebrot-0xr",
    "slug": "gamebrot-0xr",
    "name": "Gamebrot 0XR",
    "category": "Gaming",
    "price": 189,
    "inStock": false,
    "image": "/products/7gTyrPv3vkoowZ8uAS0PhZ7qfR8.png",
    "description": "Gamebrot 0XR brings console-quality gaming to the palm of your hand. With its high-definition display, ergonomic design, and powerful processor, the Z1 delivers smooth gameplay and stunning visuals, whether youâre at home or on the go. Equipped with a long-lasting battery, customizable controls, and built-in Wi-Fi for online multiplayer, the NeoPlay Z1 offers an immersive gaming experience anywhere, anytime. Access a vast library of games and enjoy uninterrupted play with this sleek, portable powerhouse.\n\nFree shipping on all orders!\n\nIn Stock\n\n$79\n\nCalc 9000\n\nOut of Stock\n\n$189\n\nPeeuriva 24-T4\n\n$399\n\nClock Orange O2\n\n$199\n\nRadion Y-01\n\nFAQ\n\nReturns Policy\n\nTerms and Conditions\n\nContact",
    "featured": false,
    "specs": {
      "dimensions": "180 × 110 × 45 mm",
      "weight": "480g",
      "materials": "Anodized Aluminum, ABS Polymer",
      "power": "Rechargeable Lithium-ion / Type-C"
    }
  },
  {
    "id": "headset-x28",
    "slug": "headset-x28",
    "name": "Headset x28",
    "category": "Speaker",
    "price": 189,
    "inStock": true,
    "image": "/products/Q3GZoob7o00Ph3EvrwhWAqbfPI.png",
    "description": "Immerse yourself in sound like never before with the AudioPro X1 Headset. This sleek, comfortable headset delivers premium audio quality for an exceptional listening experience.\n\nFeatures:High-Fidelity SoundErgonomic Design for ComfortAdjustable HeadbandNoise-Canceling MicrophoneInline Volume and Mute Controls\n\nFree shipping on all orders!\n\nIn Stock\n\n$79\n\nCalc 9000\n\nOut of Stock\n\n$189\n\nPeeuriva 24-T4\n\n$399\n\nClock Orange O2\n\n$199\n\nRadion Y-01\n\nFAQ\n\nReturns Policy\n\nTerms and Conditions\n\nContact",
    "featured": false,
    "specs": {
      "dimensions": "180 × 110 × 45 mm",
      "weight": "480g",
      "materials": "Anodized Aluminum, ABS Polymer",
      "power": "Rechargeable Lithium-ion / Type-C"
    }
  },
  {
    "id": "peeuriva-24-t4",
    "slug": "peeuriva-24-t4",
    "name": "Peeuriva 24-T4",
    "category": "Clock",
    "price": 189,
    "inStock": false,
    "image": "/products/jj10qxfx4o42XIpRi5mhD0G02M.png",
    "description": "Peeuriva 24-T4 is a nostalgic tribute to vintage radios, reimagined with modern technology. With its sleek wood-finish body, metallic dials, and digital enhancements, this radio is a perfect blend of timeless design and cutting-edge audio performance. Whether youâre tuning into your favorite FM station or streaming via Bluetooth, the RetroWave R7 delivers rich sound in a stylish package that complements any room.\n\nFree shipping on all orders!\n\nIn Stock\n\n$79\n\nCalc 9000\n\nOut of Stock\n\n$399\n\nClock Orange O2\n\n$199\n\nRadion Y-01\n\nFAQ\n\nReturns Policy\n\nTerms and Conditions\n\nContact",
    "featured": false,
    "specs": {
      "dimensions": "180 × 110 × 45 mm",
      "weight": "480g",
      "materials": "Anodized Aluminum, ABS Polymer",
      "power": "Rechargeable Lithium-ion / Type-C"
    }
  }
];
