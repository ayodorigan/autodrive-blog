import type { BlogPost } from './blogPosts';

const img = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750`;

// Quick reads: each post is roughly 150-250 words, a one-to-two-minute read.
export const shortPosts: BlogPost[] = [
  {
    id: '7',
    title: 'Why Your Tyre Pressure Matters More Than You Think',
    excerpt: 'A few PSI makes a surprising difference to fuel use, grip and tyre life.',
    author: 'Jennifer Chen',
    date: 'October 5, 2026',
    readTime: '1 min read',
    coverImage: img(8498039),
    category: 'Maintenance',
    content: {
      intro: 'Tyre pressure is the cheapest thing on your car to get right, and one of the most commonly ignored. Most cars are driven a little under-inflated, and the costs add up quietly.',
      sections: [
        {
          heading: 'What low pressure does',
          content: 'An under-inflated tyre flexes more, which builds heat, wears the shoulders early and adds rolling resistance. Ten percent under the recommended pressure can cost around two percent in fuel and noticeably longer braking distances in the wet.'
        },
        {
          heading: 'Check it the right way',
          content: 'Use the pressure printed on the door jamb sticker, not the maximum on the tyre sidewall. Check when the tyres are cold, ideally once a month and before a long trip. A decent gauge costs less than a coffee and lasts for years.'
        }
      ],
      conclusion: 'Two minutes a month keeps your tyres safer, your fuel bill lower and your tread lasting longer. Few habits pay back so quickly.'
    }
  },
  {
    id: '8',
    title: 'Hybrid, Plug-in or Full EV: A Quick Guide',
    excerpt: 'The three flavours of electrified cars explained in plain terms.',
    author: 'Sarah Mitchell',
    date: 'October 4, 2026',
    readTime: '2 min read',
    coverImage: img(24376862),
    category: 'Electric Vehicles',
    content: {
      intro: 'Electrified cars come in three main types, and the badges on the boot rarely explain the difference. Here is what each one actually means for your driving.',
      sections: [
        {
          heading: 'Hybrid and plug-in hybrid',
          content: 'A regular hybrid charges its small battery from the engine and braking; you never plug it in. A plug-in hybrid has a bigger battery you charge at home, usually good for 30 to 60 miles of electric driving before the petrol engine takes over.'
        },
        {
          heading: 'Full electric',
          content: 'A battery-electric car has no engine at all. Running costs are lowest and there is no exhaust, but you depend entirely on charging. It suits people who can charge at home or work and whose daily driving fits comfortably inside the range.'
        }
      ],
      conclusion: 'If you cannot charge at home, a hybrid is the safe choice. If you can, a plug-in or full EV will likely cost less to run from day one.'
    }
  },
  {
    id: '9',
    title: 'The Five-Minute Pre-Trip Walkaround',
    excerpt: 'A quick check before a long drive catches most of the problems that strand people.',
    author: 'Lisa Anderson',
    date: 'October 3, 2026',
    readTime: '1 min read',
    coverImage: img(14364079),
    category: 'Tips & Tricks',
    content: {
      intro: 'Breakdowns on long trips are rarely dramatic failures. They are usually small things that a quick look in the driveway would have caught.',
      sections: [
        {
          heading: 'Outside the car',
          content: 'Walk around once. Look at each tyre for bulges and obvious low pressure, check that all lights work, and glance under the car for fresh drips. Clean the windscreen and top up the washer fluid.'
        },
        {
          heading: 'Under the bonnet',
          content: 'Check the oil level on the dipstick and the coolant level in the reservoir. Both should sit between the marks. If either is low, top up and make a note to find out why.'
        }
      ],
      conclusion: 'Five minutes before you leave is far cheaper than an hour on the hard shoulder.'
    }
  },
  {
    id: '10',
    title: 'What Makes a Sports Car a Sports Car?',
    excerpt: 'It is not just horsepower. The real ingredients are lighter and lower.',
    author: 'Marcus Rodriguez',
    date: 'October 2, 2026',
    readTime: '1 min read',
    coverImage: img(29126220),
    category: 'Sports Cars',
    content: {
      intro: 'Plenty of fast cars are not sports cars, and some slow ones are. The difference lies in how the car is built to feel, not just how quickly it accelerates.',
      sections: [
        {
          heading: 'Low, light and balanced',
          content: 'A sports car sits low to keep its weight close to the road, keeps mass down so it changes direction eagerly, and balances that mass between the axles. Rear-wheel drive and a short wheelbase help it rotate rather than plough.'
        },
        {
          heading: 'Feedback over numbers',
          content: 'Steering that tells you what the front tyres are doing, a gearbox you want to use and brakes with a firm pedal matter more than a headline power figure. That is why a modest roadster can be more rewarding than a heavy saloon with twice the power.'
        }
      ],
      conclusion: 'Speed is easy to buy. Feel is what makes a sports car worth owning.'
    }
  },
  {
    id: '11',
    title: 'How Regenerative Braking Actually Works',
    excerpt: 'The trick that lets EVs and hybrids recover energy every time you slow down.',
    author: 'David Park',
    date: 'October 1, 2026',
    readTime: '1 min read',
    coverImage: img(35736783),
    category: 'Technology',
    content: {
      intro: 'Regenerative braking is why electric cars are so efficient in traffic. Instead of turning motion into heat, it turns some of it back into charge.',
      sections: [
        {
          heading: 'Motor becomes generator',
          content: 'When you lift off the accelerator, the electric motor runs in reverse as a generator. The wheels spin it, the resistance slows the car and the electricity flows back into the battery. The friction brakes only step in when you need to stop harder.'
        },
        {
          heading: 'What it means for you',
          content: 'Brake pads on an EV can last well over 100,000 miles. Many drivers use one-pedal mode, where lifting off slows the car strongly enough that the brake pedal is rarely needed around town.'
        }
      ],
      conclusion: 'Smooth, anticipatory driving recovers the most energy. Hard braking still throws it away as heat.'
    }
  },
  {
    id: '12',
    title: 'Three Classic Cars You Can Still Afford',
    excerpt: 'Charm, simplicity and parts availability without the auction-house prices.',
    author: 'Robert Thompson',
    date: 'September 30, 2026',
    readTime: '2 min read',
    coverImage: img(25349389),
    category: 'Classic Cars',
    content: {
      intro: 'Classic ownership does not have to mean a six-figure outlay. A handful of cars remain cheap to buy, simple to fix and well supported by owners clubs.',
      sections: [
        {
          heading: 'MG B and Mazda MX-5',
          content: 'The MGB is the classic roadster with the best parts supply in the world; nearly every component is available new. The first-generation MX-5 is its spiritual successor, now old enough to be a classic and still cheap to run.'
        },
        {
          heading: 'Volvo 240',
          content: 'If you want a usable daily classic, the 240 is nearly unbreakable. Simple engines, huge boots and a devoted following mean clean examples are still affordable and easy to keep on the road.'
        }
      ],
      conclusion: 'Buy the best-bodied example you can find. Mechanical parts are cheap; rust repair is not.'
    }
  },
  {
    id: '13',
    title: 'Dashboard Warning Lights: Red, Amber, Green',
    excerpt: 'A colour-coded rule of thumb for what to do when a light comes on.',
    author: 'Jennifer Chen',
    date: 'September 29, 2026',
    readTime: '1 min read',
    coverImage: img(33799851),
    category: 'Maintenance',
    content: {
      intro: 'Modern dashboards can show dozens of symbols. You do not need to memorise them all, because the colour already tells you how urgent it is.',
      sections: [
        {
          heading: 'Red means stop',
          content: 'Red lights signal something that can damage the car or endanger you: oil pressure, engine temperature, brake system, charging failure. Pull over safely and switch off before carrying on.'
        },
        {
          heading: 'Amber means soon, green means on',
          content: 'Amber lights such as the engine management or tyre pressure warnings mean get it checked, but you can usually continue carefully. Green and blue lights are simply confirming that something, like your high beams, is switched on.'
        }
      ],
      conclusion: 'When in doubt, the owner\'s manual has a page for every symbol. Keep it in the glovebox.'
    }
  },
  {
    id: '14',
    title: 'Why EV Range Drops in Winter',
    excerpt: 'Cold weather can cut range by a third. Here is why, and how to limit it.',
    author: 'Sarah Mitchell',
    date: 'September 28, 2026',
    readTime: '1 min read',
    coverImage: img(9799991),
    category: 'Electric Vehicles',
    content: {
      intro: 'Every EV owner notices the same thing in their first winter: the range estimate shrinks. It is normal, and mostly manageable.',
      sections: [
        {
          heading: 'Where the energy goes',
          content: 'Cold batteries deliver less power and accept charge more slowly. On top of that, heating the cabin draws from the same battery, and there is no waste engine heat to borrow. Heating is the bigger factor on short trips.'
        },
        {
          heading: 'How to claw it back',
          content: 'Preheat the car while it is still plugged in so the battery and cabin warm on mains power. Use heated seats and steering wheel instead of blasting the cabin heater, and keep the tyres properly inflated.'
        }
      ],
      conclusion: 'Expect 20 to 30 percent less range in a hard winter and plan charging stops accordingly. It all comes back in spring.'
    }
  },
  {
    id: '15',
    title: 'Manual vs Automatic: Does It Still Matter?',
    excerpt: 'Automatics have won the sales war. Whether they have won the argument depends on you.',
    author: 'Marcus Rodriguez',
    date: 'September 27, 2026',
    readTime: '1 min read',
    coverImage: img(32087025),
    category: 'Tips & Tricks',
    content: {
      intro: 'Modern automatics are faster, more efficient and far more pleasant in traffic than the slushboxes of old. So why do some drivers still insist on a clutch pedal?',
      sections: [
        {
          heading: 'The case for automatic',
          content: 'Dual-clutch and multi-speed torque-converter boxes shift quicker than any human and often return better fuel economy. In stop-start commuting they remove the one tedious part of driving. Electric cars have made the question moot for many buyers.'
        },
        {
          heading: 'The case for manual',
          content: 'A manual keeps you involved, is cheaper to repair, and in a light sports car is simply more fun. Used values for manual enthusiast cars are now holding up better than their automatic twins.'
        }
      ],
      conclusion: 'For a commuter, buy the automatic. For a weekend car, drive both and let your right hand decide.'
    }
  },
  {
    id: '16',
    title: 'How Often Should You Really Change Your Oil?',
    excerpt: 'The 3,000-mile rule is long dead. Here is what to follow instead.',
    author: 'Jennifer Chen',
    date: 'September 26, 2026',
    readTime: '1 min read',
    coverImage: img(8478201),
    category: 'Maintenance',
    content: {
      intro: 'Oil change intervals are one of the most argued-about topics in car care, mostly because the advice has changed a lot in twenty years.',
      sections: [
        {
          heading: 'Follow the manual, with one caveat',
          content: 'Modern synthetic oils and tighter engine tolerances mean most manufacturers specify 10,000 miles or a year, whichever comes first. If your driving is mostly short trips where the engine never fully warms, halve that interval.'
        },
        {
          heading: 'Check the level between changes',
          content: 'Many modern engines consume some oil by design. Check the dipstick monthly and top up with the grade in the manual. Running low is far more damaging than a slightly overdue change.'
        }
      ],
      conclusion: 'Right oil, right interval, and never let it run low. That is the whole secret to a long-lived engine.'
    }
  },
  {
    id: '17',
    title: 'What Is a Dual-Clutch Gearbox?',
    excerpt: 'Two clutches, no torque converter, and shifts quicker than you can blink.',
    author: 'David Park',
    date: 'September 25, 2026',
    readTime: '1 min read',
    coverImage: img(4157182),
    category: 'Technology',
    content: {
      intro: 'Dual-clutch transmissions have spread from supercars to hatchbacks. They feel like automatics but work more like two manuals sharing one engine.',
      sections: [
        {
          heading: 'How it shifts so fast',
          content: 'One clutch handles the odd gears, the other the even gears. While you are driving in third, fourth is already selected on the other shaft. Changing gear is just a matter of swapping which clutch is engaged, which takes milliseconds.'
        },
        {
          heading: 'The trade-offs',
          content: 'They can be hesitant at crawling speeds and in parking manoeuvres, and early dry-clutch versions had reliability problems. Modern wet-clutch units are smoother and more durable, but still need their fluid changed on schedule.'
        }
      ],
      conclusion: 'Great on the open road, occasionally awkward in a car park. Test drive one in traffic before you buy.'
    }
  },
  {
    id: '18',
    title: 'The Short History of the Hot Hatch',
    excerpt: 'How a Golf with a bigger engine created an entire category.',
    author: 'Robert Thompson',
    date: 'September 24, 2026',
    readTime: '2 min read',
    coverImage: img(39978118),
    category: 'Classic Cars',
    content: {
      intro: 'In 1976 a few Volkswagen engineers built a Golf with a fuel-injected engine and stiffer suspension as a side project. It became the GTI and started a formula that still sells by the hundred thousand.',
      sections: [
        {
          heading: 'The golden era',
          content: 'Through the 1980s the Peugeot 205 GTI, Renault 5 GT Turbo and Ford Escort XR3i turned the hot hatch into a cultural moment. They were cheap, light, practical and genuinely quick on a back road.'
        },
        {
          heading: 'Where it went next',
          content: 'Power climbed from around 110 horsepower to over 300 in today\'s Civic Type R and Golf R. The best modern examples kept the original recipe of usable performance in a car you can take to the supermarket.'
        }
      ],
      conclusion: 'The hot hatch endures because the idea was right from the start: one car that does everything, and does it with a grin.'
    }
  },
  {
    id: '19',
    title: 'Home EV Charging: What You Actually Need',
    excerpt: 'A wallbox, an electrician and an off-peak tariff cover most people.',
    author: 'Sarah Mitchell',
    date: 'September 23, 2026',
    readTime: '1 min read',
    coverImage: img(3846205),
    category: 'Electric Vehicles',
    content: {
      intro: 'Charging at home is the single biggest reason EV ownership works. Setting it up is simpler than most people expect.',
      sections: [
        {
          heading: 'The hardware',
          content: 'A three-pin plug will charge a car overnight at a crawl, but a dedicated 7 kW wallbox fills most batteries from empty in six to ten hours. It needs a qualified electrician and, in many countries, a notification to your distribution network.'
        },
        {
          heading: 'The tariff',
          content: 'Off-peak EV tariffs can cut the cost of a full charge to a few pounds or dollars. Set the car or wallbox to charge in the cheap window and you will rarely think about it again.'
        }
      ],
      conclusion: 'Wallbox, smart schedule, cheap overnight rate. That combination is what makes an EV cheaper than petrol.'
    }
  },
  {
    id: '20',
    title: 'How to Read a Tyre Sidewall',
    excerpt: 'That string of numbers tells you size, speed rating and age in a few characters.',
    author: 'Lisa Anderson',
    date: 'September 22, 2026',
    readTime: '1 min read',
    coverImage: img(31414131),
    category: 'Tips & Tricks',
    content: {
      intro: 'A tyre marked 225/45 R17 94W looks like code, but every part has a plain meaning, and you need it when buying replacements.',
      sections: [
        {
          heading: 'Size and construction',
          content: '225 is the width in millimetres. 45 is the sidewall height as a percentage of that width. R means radial construction and 17 is the wheel diameter in inches. All four must match what your car was designed for.'
        },
        {
          heading: 'Load, speed and age',
          content: '94 is the load index and W the speed rating; never go below what the manufacturer specifies. The four-digit DOT code shows the week and year of manufacture. Tyres older than six years should be replaced regardless of tread.'
        }
      ],
      conclusion: 'Photograph your sidewall before shopping for tyres. It answers every question the fitter will ask.'
    }
  },
  {
    id: '21',
    title: 'Why Race Cars Have Wings',
    excerpt: 'Downforce explained without the equations.',
    author: 'Marcus Rodriguez',
    date: 'September 21, 2026',
    readTime: '1 min read',
    coverImage: img(39436669),
    category: 'Sports Cars',
    content: {
      intro: 'An aeroplane wing lifts. Flip it over, bolt it to a car and it pushes down instead. That simple inversion is why modern racing cars can corner at speeds that seem to defy grip.',
      sections: [
        {
          heading: 'Pressing the tyres into the road',
          content: 'A tyre grips in proportion to the load on it. Downforce adds load without adding mass, so the car corners harder at high speed yet still feels light in slow bends. A Formula 1 car generates enough to drive upside down above about 120 mph.'
        },
        {
          heading: 'The cost',
          content: 'Wings create drag, so every circuit is a compromise between straight-line speed and cornering grip. On a road car, a modest spoiler mostly reduces lift and adds stability rather than real downforce.'
        }
      ],
      conclusion: 'Aerodynamics is why a race car looks the way it does. Everything on the body is there to manage air.'
    }
  },
  {
    id: '22',
    title: 'Brake Pads: Signs They Need Replacing',
    excerpt: 'Squeal, grind, pull and a long pedal. Four warnings not to ignore.',
    author: 'Jennifer Chen',
    date: 'September 20, 2026',
    readTime: '1 min read',
    coverImage: img(36044141),
    category: 'Maintenance',
    content: {
      intro: 'Brake pads wear gradually, so the decline is easy to miss. The car usually tells you in one of four ways.',
      sections: [
        {
          heading: 'Noise and feel',
          content: 'A high-pitched squeal under light braking is often the built-in wear indicator. A grinding sound means the pad is gone and metal is touching the disc; stop driving. A pedal that travels further than usual or pulses can point to worn pads or warped discs.'
        },
        {
          heading: 'What to look for',
          content: 'Through the wheel spokes you can often see the pad. Less than three millimetres of friction material means it is time. Replace pads in axle pairs and check the discs for lips and scoring at the same time.'
        }
      ],
      conclusion: 'Pads are inexpensive. Discs, calipers and accidents are not. Act on the first squeal.'
    }
  },
  {
    id: '23',
    title: 'What a Turbocharger Does',
    excerpt: 'Free power from exhaust gas, and why almost every new engine has one.',
    author: 'David Park',
    date: 'September 19, 2026',
    readTime: '1 min read',
    coverImage: img(8478228),
    category: 'Technology',
    content: {
      intro: 'Twenty years ago turbos were for performance cars and diesels. Today they are on most petrol engines, large and small, because they let a small engine behave like a bigger one.',
      sections: [
        {
          heading: 'Spinning on exhaust',
          content: 'Exhaust gases spin a turbine, which drives a compressor on the same shaft. The compressor forces more air into the cylinders, so more fuel can be burned and more power made. The energy comes from exhaust that would otherwise be wasted.'
        },
        {
          heading: 'Living with one',
          content: 'Let the engine idle for thirty seconds after hard driving so the turbo cools with oil flowing. Use quality oil and change it on time; turbo bearings spin at over 100,000 rpm and depend on it.'
        }
      ],
      conclusion: 'A turbo is the reason a 1.0-litre engine can feel like a 1.6. Treat its oil well and it will last the life of the car.'
    }
  },
  {
    id: '24',
    title: 'The Pop-Up Headlight: A Fond Farewell',
    excerpt: 'Why a beloved design detail vanished, and which cars had it last.',
    author: 'Robert Thompson',
    date: 'September 18, 2026',
    readTime: '1 min read',
    coverImage: img(11931440),
    category: 'Classic Cars',
    content: {
      intro: 'Nothing says 1980s like a pair of headlights rising from a wedge-shaped bonnet. The pop-up was everywhere for three decades, then disappeared almost overnight.',
      sections: [
        {
          heading: 'Why they existed',
          content: 'Regulations demanded headlights at a minimum height, while designers wanted low, sleek noses. Hiding the lamps let cars like the Lamborghini Countach, Mazda RX-7 and Lotus Esprit have both.'
        },
        {
          heading: 'Why they died',
          content: 'Pedestrian safety rules in the early 2000s penalised hard protrusions on the bonnet, and modern projector lamps were small enough to fit a low nose anyway. The Lotus Esprit and Chevrolet Corvette C5 were among the last, both ending in 2004.'
        }
      ],
      conclusion: 'They were heavy, leaky and prone to winking. We miss them anyway.'
    }
  },
  {
    id: '25',
    title: 'Driving in Heavy Rain: Five Rules',
    excerpt: 'Slow down, see and be seen, and keep both hands on the wheel.',
    author: 'Lisa Anderson',
    date: 'September 17, 2026',
    readTime: '1 min read',
    coverImage: img(8586689),
    category: 'Tips & Tricks',
    content: {
      intro: 'Rain multiplies stopping distances and hides hazards. Most wet-weather crashes come down to speed that was fine on a dry road.',
      sections: [
        {
          heading: 'Speed and space',
          content: 'Double your following distance. If the steering suddenly feels light you are aquaplaning: ease off the accelerator, do not brake, and let the tyres find the road again. Avoid standing water on the outside of bends.'
        },
        {
          heading: 'Visibility',
          content: 'Dipped headlights on, even in daylight. Replace wiper blades that smear; they are cheap. If spray from lorries blinds you, hang back rather than overtaking into it.'
        }
      ],
      conclusion: 'Good tyres with deep tread are the most important rain safety feature you can buy.'
    }
  },
  {
    id: '26',
    title: 'Fast Charging Explained: kW, Curves and Etiquette',
    excerpt: 'Why charging slows above 80 percent and why you should not sit at 100.',
    author: 'Sarah Mitchell',
    date: 'September 16, 2026',
    readTime: '2 min read',
    coverImage: img(28851165),
    category: 'Electric Vehicles',
    content: {
      intro: 'Public rapid chargers advertise big numbers, but the speed you actually get depends on the car, the battery\'s state and the temperature.',
      sections: [
        {
          heading: 'The charging curve',
          content: 'A battery accepts charge fastest when it is low and warm. Most cars hit peak speed between 10 and 50 percent, then taper sharply after 80 percent to protect the cells. Going from 80 to 100 can take as long as 10 to 80 did.'
        },
        {
          heading: 'Road-trip strategy',
          content: 'Arrive low, leave at 80 and drive on. Precondition the battery if the car offers it so it is warm when you plug in. At busy sites, unplugging at 80 frees the charger for the next driver.'
        }
      ],
      conclusion: 'Shorter, more frequent stops beat one long one. That is how experienced EV drivers cover ground.'
    }
  },
  {
    id: '27',
    title: 'What Horsepower and Torque Really Mean',
    excerpt: 'One tells you how hard the engine pushes, the other how fast it can keep pushing.',
    author: 'David Park',
    date: 'September 15, 2026',
    readTime: '1 min read',
    coverImage: img(12505996),
    category: 'Technology',
    content: {
      intro: 'Brochures lead with horsepower. Drivers feel torque. Understanding the difference explains why two cars with the same power can feel so different.',
      sections: [
        {
          heading: 'Torque is the shove',
          content: 'Torque is twisting force at the crankshaft. Lots of it at low revs is what makes a diesel or an electric motor feel effortless when you squeeze the pedal in traffic.'
        },
        {
          heading: 'Power is torque times speed',
          content: 'Horsepower is how much work the engine does per second: torque multiplied by engine speed. A high-revving petrol engine with modest torque can make big power because it spins so fast. That is why it feels alive near the redline but lazy below 4,000 rpm.'
        }
      ],
      conclusion: 'Torque gets you moving. Power keeps you accelerating. Electric motors deliver both at once, which is why they feel so quick.'
    }
  },
  {
    id: '28',
    title: 'Buying a Used Car: The Ten-Minute Inspection',
    excerpt: 'What to check before you even start the engine.',
    author: 'Lisa Anderson',
    date: 'September 14, 2026',
    readTime: '2 min read',
    coverImage: img(25637367),
    category: 'Tips & Tricks',
    content: {
      intro: 'You do not need to be a mechanic to avoid a bad used car. Most problems announce themselves if you look in the right places.',
      sections: [
        {
          heading: 'Body and paperwork',
          content: 'Check panel gaps are even and paint matches across panels; mismatches point to accident repair. Confirm the chassis number on the car matches the documents. Look at the service history for regular stamps and recent big jobs like a timing belt.'
        },
        {
          heading: 'Fluids and a cold start',
          content: 'Pull the dipstick: milky oil means head gasket trouble. Ask that the engine is cold when you arrive, then listen for rattles on start-up and watch the exhaust for blue or white smoke. Test every switch and button.'
        }
      ],
      conclusion: 'If anything feels wrong, walk away. There is always another car.'
    }
  },
  {
    id: '29',
    title: 'The Mini: Small Car, Huge Idea',
    excerpt: 'How a fuel crisis produced the most influential small car ever built.',
    author: 'Robert Thompson',
    date: 'September 13, 2026',
    readTime: '1 min read',
    coverImage: img(30703628),
    category: 'Classic Cars',
    content: {
      intro: 'The 1956 Suez crisis rationed petrol in Britain and sent buyers towards tiny bubble cars. Alec Issigonis was asked for something better. He delivered the Mini in 1959.',
      sections: [
        {
          heading: 'The packaging trick',
          content: 'Turning the engine sideways and sitting the gearbox beneath it freed up eighty percent of the car\'s length for people and luggage. A wheel at each corner gave go-kart handling almost by accident.'
        },
        {
          heading: 'The legacy',
          content: 'Every front-wheel-drive hatchback since follows the same layout. The Mini also won the Monte Carlo Rally three times and became a 1960s fashion icon, which no economy car has managed before or since.'
        }
      ],
      conclusion: 'Five million were built over 41 years. The idea inside it is still in production today.'
    }
  },
  {
    id: '30',
    title: 'Coolant: The Fluid Everyone Forgets',
    excerpt: 'It stops your engine boiling in summer and cracking in winter. Check it.',
    author: 'Jennifer Chen',
    date: 'September 12, 2026',
    readTime: '1 min read',
    coverImage: img(3807517),
    category: 'Maintenance',
    content: {
      intro: 'Coolant does more than carry heat away. It also stops the system freezing, protects against corrosion and lubricates the water pump. Old coolant does none of those well.',
      sections: [
        {
          heading: 'What to check',
          content: 'With the engine cold, the level in the expansion tank should be between the marks. The colour should be clear and bright, not brown or oily. A sweet smell under the bonnet or a sticky residue near hoses means a leak.'
        },
        {
          heading: 'When to change it',
          content: 'Long-life coolants last five years or more, but they do not last forever. Use the type the manual specifies; mixing types can cause it to gel. Never open the cap on a hot engine.'
        }
      ],
      conclusion: 'Twenty seconds at the expansion tank each month heads off one of the most expensive failures a car can have.'
    }
  },
  {
    id: '31',
    title: 'Why Supercars Put the Engine in the Middle',
    excerpt: 'Balance, traction and a low polar moment, explained simply.',
    author: 'Marcus Rodriguez',
    date: 'September 11, 2026',
    readTime: '1 min read',
    coverImage: img(30706140),
    category: 'Sports Cars',
    content: {
      intro: 'Almost every serious supercar since the Lamborghini Miura has sat its engine behind the driver. There are good reasons, and one obvious downside.',
      sections: [
        {
          heading: 'Weight where it works',
          content: 'With the heaviest component between the axles, the car has near-even weight distribution and resists changing direction less, so it turns in eagerly. More weight over the rear wheels also means better traction when accelerating out of a corner.'
        },
        {
          heading: 'The downside',
          content: 'Mid-engined cars can be snappier when they do let go, because the mass is concentrated near the centre and rotation happens quickly. Luggage space and rear visibility suffer too, which is why grand tourers keep the engine up front.'
        }
      ],
      conclusion: 'Mid-engined for the track, front-engined for the long way home. Both are right.'
    }
  },
  {
    id: '32',
    title: 'Are Electric Cars Really Cheaper to Run?',
    excerpt: 'Fuel, servicing, tax and depreciation, briefly totted up.',
    author: 'Sarah Mitchell',
    date: 'September 10, 2026',
    readTime: '2 min read',
    coverImage: img(34800929),
    category: 'Electric Vehicles',
    content: {
      intro: 'The purchase price of an EV is often higher. Whether it works out cheaper depends on how you charge and how long you keep it.',
      sections: [
        {
          heading: 'Where EVs win',
          content: 'Home charging on an off-peak tariff costs a fraction of petrol per mile. Servicing is simpler with no oil, filters, belts or exhaust, and brake wear is minimal. Many countries still offer lower road tax and company-car rates.'
        },
        {
          heading: 'Where they do not',
          content: 'Public rapid charging can cost as much per mile as petrol. Insurance is often higher, and depreciation on early EVs has been steep as newer models improved quickly. Tyres wear faster under the extra weight.'
        }
      ],
      conclusion: 'With home charging and a few years of ownership, an EV usually comes out ahead. Without home charging, do the sums carefully.'
    }
  },
  {
    id: '33',
    title: 'Adaptive Cruise Control: How It Thinks',
    excerpt: 'Radar, cameras and a very patient algorithm.',
    author: 'David Park',
    date: 'September 9, 2026',
    readTime: '1 min read',
    coverImage: img(33253286),
    category: 'Technology',
    content: {
      intro: 'Adaptive cruise control keeps a set gap to the car in front rather than a fixed speed. It is the feature most likely to change how you feel about motorway driving.',
      sections: [
        {
          heading: 'Sensing the gap',
          content: 'A radar behind the badge measures the distance and closing speed of the vehicle ahead. A forward camera confirms what it is looking at. The car eases off, brakes gently or accelerates to hold the gap you chose.'
        },
        {
          heading: 'What it cannot do',
          content: 'Most systems do not react to stationary objects at speed, struggle in heavy rain, and can be fooled by cars cutting in late. It is an aid, not an autopilot: you still watch the road and keep your hands on the wheel.'
        }
      ],
      conclusion: 'Set the longest gap you can tolerate. It is smoother, safer and uses less fuel.'
    }
  },
  {
    id: '34',
    title: 'Parking a Car for the Winter',
    excerpt: 'Keep the battery alive and the tyres round with a few simple steps.',
    author: 'Lisa Anderson',
    date: 'September 8, 2026',
    readTime: '1 min read',
    coverImage: img(13044866),
    category: 'Tips & Tricks',
    content: {
      intro: 'A car left for months does not just sit there. Batteries drain, tyres flat-spot and fuel goes stale. A little preparation avoids a frustrating spring.',
      sections: [
        {
          heading: 'Before you park it',
          content: 'Fill the tank to stop condensation and add a fuel stabiliser. Over-inflate the tyres slightly or lift the car onto stands. Wash it so dirt does not eat the paint, and leave the handbrake off with the car in gear or chocked.'
        },
        {
          heading: 'While it sits',
          content: 'Connect a smart trickle charger to the battery. If you cannot, disconnect the negative terminal. Put a dehumidifier bag inside and leave a window cracked a few millimetres if the car is under cover.'
        }
      ],
      conclusion: 'Ten minutes of preparation means the car starts first time when the weather turns.'
    }
  },
  {
    id: '35',
    title: 'The Citroën DS: Twenty Years Ahead',
    excerpt: 'Hydraulic suspension, swivelling headlights and a shape from the future, in 1955.',
    author: 'Robert Thompson',
    date: 'September 7, 2026',
    readTime: '1 min read',
    coverImage: img(39198817),
    category: 'Classic Cars',
    content: {
      intro: 'When the DS appeared at the 1955 Paris Motor Show, Citroën took 12,000 orders on the first day. Nothing else on the road looked or rode like it.',
      sections: [
        {
          heading: 'What made it different',
          content: 'Self-levelling hydropneumatic suspension gave a ride no steel spring could match and let the car run on three wheels if it had to. Power steering, power brakes and later headlights that turned with the wheel were all years ahead of rivals.'
        },
        {
          heading: 'Why it still matters',
          content: 'Its aerodynamic shape, single-spoke wheel and glasshouse influenced decades of design. The hydraulic ideas resurfaced in modern adaptive suspension. It is proof that a mainstream car can be genuinely radical.'
        }
      ],
      conclusion: 'Nearly 1.5 million were built. Driving one today still feels like borrowing something from a different era.'
    }
  },
  {
    id: '36',
    title: 'Timing Belt or Chain: Which Does Your Car Have?',
    excerpt: 'One needs replacing on schedule, the other usually lasts the engine\'s life. Know which.',
    author: 'Jennifer Chen',
    date: 'September 6, 2026',
    readTime: '1 min read',
    coverImage: img(8985664),
    category: 'Maintenance',
    content: {
      intro: 'The timing belt or chain keeps the valves and pistons from meeting. If it fails, the engine is often destroyed. Knowing which type you have tells you whether it needs a diary entry.',
      sections: [
        {
          heading: 'Belts',
          content: 'A rubber belt is quiet and cheap but must be changed on schedule, typically every 60,000 to 100,000 miles or five to seven years. Replace the water pump and tensioners at the same time, since they share the labour.'
        },
        {
          heading: 'Chains',
          content: 'A metal chain is designed to last the life of the engine, though some do stretch. A rattle on cold start is the classic warning. Clean oil changed on time is what keeps a chain healthy.'
        }
      ],
      conclusion: 'Check your manual. If it is a belt and the history does not show a change, budget for one now.'
    }
  },
  {
    id: '37',
    title: 'Track Day Basics for First-Timers',
    excerpt: 'What to bring, what to check and how to enjoy your first lap.',
    author: 'Marcus Rodriguez',
    date: 'September 5, 2026',
    readTime: '2 min read',
    coverImage: img(36683301),
    category: 'Sports Cars',
    content: {
      intro: 'A track day is the safest place to find out what your car can do. Preparation is simple, and the first rule is that you are not racing anyone.',
      sections: [
        {
          heading: 'Preparing the car',
          content: 'Fresh brake fluid, pads with plenty of material and tyres at the right pressure are essential. Check oil and coolant, remove loose items from the cabin and boot, and bring a torque wrench to check wheel nuts between sessions.'
        },
        {
          heading: 'Preparing yourself',
          content: 'Wear a helmet and long sleeves. Do the briefing, learn the flags and spend the first sessions building speed gradually. Book an instructor for a session; it is the fastest way to get quicker and safer.'
        }
      ],
      conclusion: 'Drive home slowly. Your sense of speed will be recalibrated for a few hours.'
    }
  },
  {
    id: '38',
    title: 'Solid-State Batteries: What to Expect',
    excerpt: 'More range, faster charging, less fire risk. Why they are not here yet.',
    author: 'Sarah Mitchell',
    date: 'September 4, 2026',
    readTime: '1 min read',
    coverImage: img(33508511),
    category: 'Electric Vehicles',
    content: {
      intro: 'Solid-state batteries replace the liquid electrolyte in lithium-ion cells with a solid. The promise is large; the production challenge is larger.',
      sections: [
        {
          heading: 'The upside',
          content: 'A solid electrolyte allows a lithium-metal anode, which can store far more energy for the same weight. It is also far less flammable and should tolerate faster charging and more cycles before degrading.'
        },
        {
          heading: 'The hard part',
          content: 'Making the solid layer thin, flaw-free and durable at scale has proved difficult, and the cells need pressure and heat management that is tricky in a car. Several manufacturers have announced limited production, with volume still a few years off.'
        }
      ],
      conclusion: 'They will arrive first in premium cars, then trickle down. Today\'s lithium-ion packs will remain good for years yet.'
    }
  },
  {
    id: '39',
    title: 'Why Your Fuel Economy Is Worse Than the Brochure',
    excerpt: 'Official figures come from a test cycle. Real roads are messier.',
    author: 'David Park',
    date: 'September 3, 2026',
    readTime: '1 min read',
    coverImage: img(14848422),
    category: 'Technology',
    content: {
      intro: 'Almost nobody matches the official fuel figure. The gap is not deception so much as a controlled lab test meeting an uncontrolled world.',
      sections: [
        {
          heading: 'How the figure is made',
          content: 'Cars are tested on a rolling road following a fixed speed profile at a set temperature. Modern WLTP cycles are more realistic than the old ones, but still gentler than a cold commute with the heater and lights on.'
        },
        {
          heading: 'What you can control',
          content: 'Short trips with a cold engine, aggressive acceleration, roof boxes, under-inflated tyres and extra weight all hurt. Smooth driving and looking ahead to avoid braking usually recover ten percent or more.'
        }
      ],
      conclusion: 'Use the official figure to compare cars, not to predict your bill. Your own trip computer tells the truth.'
    }
  },
  {
    id: '40',
    title: 'Jump-Starting a Car Safely',
    excerpt: 'The right order of leads, and the one mistake that fries electronics.',
    author: 'Lisa Anderson',
    date: 'September 2, 2026',
    readTime: '1 min read',
    coverImage: img(6870328),
    category: 'Tips & Tricks',
    content: {
      intro: 'A flat battery is the most common breakdown there is. Jump-starting is easy if you follow the sequence, and risky if you do not.',
      sections: [
        {
          heading: 'The sequence',
          content: 'Red lead to the flat battery\'s positive, then to the donor\'s positive. Black lead to the donor\'s negative, then to a bare metal point on the dead car\'s engine, away from the battery. Start the donor, wait a minute, then start the dead car.'
        },
        {
          heading: 'The mistakes',
          content: 'Never let the clamps touch each other while connected, and never connect black to the dead battery\'s negative terminal where a spark could ignite gases. Remove the leads in reverse order. Then drive for half an hour or put the battery on a charger.'
        }
      ],
      conclusion: 'A lithium jump pack in the boot makes all of this a one-person job. It is the best thirty pounds you will spend.'
    }
  },
  {
    id: '41',
    title: 'The Porsche 911: Why It Never Changed',
    excerpt: 'Sixty years of the same silhouette, and the engine still in the wrong place.',
    author: 'Robert Thompson',
    date: 'September 1, 2026',
    readTime: '1 min read',
    coverImage: img(17476943),
    category: 'Classic Cars',
    content: {
      intro: 'Every few years someone predicts Porsche will finally move the 911\'s engine forward. Every few years a new 911 arrives with it still hanging out behind the rear axle.',
      sections: [
        {
          heading: 'A flaw made into a feature',
          content: 'A rear-mounted engine gives huge traction and short overhangs but made early cars tail-happy. Porsche spent decades taming that with wider rear tyres, suspension geometry and, eventually, electronics, until the layout became a strength.'
        },
        {
          heading: 'Evolution, not revolution',
          content: 'Each generation is recognisably the last one, refined. That continuity keeps old cars desirable and new ones familiar, which is why values hold and the badge still sells in the tens of thousands a year.'
        }
      ],
      conclusion: 'The 911 is proof that getting one idea right, then polishing it for sixty years, beats starting over.'
    }
  },
  {
    id: '42',
    title: 'Washing Your Car Without Scratching It',
    excerpt: 'Two buckets, a soft mitt and no sponges. That is most of it.',
    author: 'Jennifer Chen',
    date: 'August 31, 2026',
    readTime: '1 min read',
    coverImage: img(29755711),
    category: 'Maintenance',
    content: {
      intro: 'Most swirl marks in paint are not from the road. They come from washing with gritty water and the wrong tools.',
      sections: [
        {
          heading: 'The method',
          content: 'Rinse the loose dirt off first. Use one bucket of soapy water and a second of clean water to rinse the mitt between panels, so grit does not go back onto the paint. Work from the top down and do the wheels last with separate tools.'
        },
        {
          heading: 'The tools',
          content: 'A microfibre wash mitt, not a sponge; sponges trap grit against the surface. Dry with a soft microfibre towel or a blower rather than a chamois. Avoid washing in direct sun, which bakes soap onto the paint.'
        }
      ],
      conclusion: 'A careful wash every couple of weeks keeps the paint looking new for years longer than any wax.'
    }
  },
  {
    id: '43',
    title: 'How Lane-Keeping Assist Sees the Road',
    excerpt: 'A camera, some painted lines and a gentle nudge on the wheel.',
    author: 'David Park',
    date: 'August 30, 2026',
    readTime: '1 min read',
    coverImage: img(18121618),
    category: 'Technology',
    content: {
      intro: 'Lane-keeping systems are now standard on most new cars. They are useful on a long motorway, and occasionally irritating on a narrow country road.',
      sections: [
        {
          heading: 'How it works',
          content: 'A camera behind the windscreen finds the lane markings and tracks the car\'s position between them. If you drift towards a line without indicating, the system applies a small steering torque to guide you back, often with a vibration or chime.'
        },
        {
          heading: 'Its limits',
          content: 'It needs visible lines, so it gives up in snow, heavy rain, roadworks and on faded paint. It does not steer around obstacles. Most cars let you turn it off, though it often re-enables on the next start.'
        }
      ],
      conclusion: 'Treat it as a safety net for a moment of inattention, not a reason to have one.'
    }
  },
  {
    id: '44',
    title: 'Does Premium Fuel Make a Difference?',
    excerpt: 'For most cars, no. For a few, yes. Here is how to tell which you have.',
    author: 'Lisa Anderson',
    date: 'August 29, 2026',
    readTime: '1 min read',
    coverImage: img(37576219),
    category: 'Tips & Tricks',
    content: {
      intro: 'Premium fuel costs noticeably more. Whether it buys anything depends on what your engine was designed to burn.',
      sections: [
        {
          heading: 'Octane and knock',
          content: 'A higher octane rating resists pre-ignition, which matters in high-compression or turbocharged engines tuned for it. If the filler cap or manual asks for premium, use it; the engine will make less power and may run rougher on regular.'
        },
        {
          heading: 'When it is wasted',
          content: 'If the manual specifies regular, the engine cannot take advantage of higher octane and you will see no gain in economy or power. The additive packages in premium fuels can help keep injectors clean, but an occasional tank does the same job.'
        }
      ],
      conclusion: 'Read the inside of the filler flap. It settles the argument for your car in two seconds.'
    }
  },
  {
    id: '45',
    title: 'The Difference Between AWD and 4WD',
    excerpt: 'Both drive all four wheels. They are built for different jobs.',
    author: 'Marcus Rodriguez',
    date: 'August 28, 2026',
    readTime: '1 min read',
    coverImage: img(23385659),
    category: 'Sports Cars',
    content: {
      intro: 'All-wheel drive and four-wheel drive sound interchangeable. On the road, in the snow and off it, they behave quite differently.',
      sections: [
        {
          heading: 'All-wheel drive',
          content: 'AWD systems run all the time and use a centre differential or clutch to vary how much torque goes to each axle. They are designed for tarmac grip in the wet and on fast cars, and they work without the driver doing anything.'
        },
        {
          heading: 'Four-wheel drive',
          content: 'Traditional 4WD is selected by the driver and locks the front and rear axles together, often with a low-range gearbox. That is ideal for mud, rocks and towing, but on dry tarmac it binds in corners, so you switch it off on the road.'
        }
      ],
      conclusion: 'AWD for performance and bad weather, 4WD for terrain. Neither helps you stop any faster.'
    }
  },
  {
    id: '46',
    title: 'Five Habits That Make Your Car Last Longer',
    excerpt: 'Small things, done consistently, are what separate a 100,000-mile car from a 300,000-mile one.',
    author: 'Jennifer Chen',
    date: 'August 27, 2026',
    readTime: '2 min read',
    coverImage: img(4756887),
    category: 'Maintenance',
    content: {
      intro: 'Longevity is less about the badge on the bonnet and more about how the car is treated. The cars that reach huge mileages tend to have owners with the same few habits.',
      sections: [
        {
          heading: 'Warm up and cool down',
          content: 'Drive gently for the first few miles until the oil is warm; most engine wear happens cold. Let a turbocharged engine idle briefly after hard use. Avoid lots of very short trips where the engine never gets warm at all.'
        },
        {
          heading: 'Stay on top of the small stuff',
          content: 'Change oil and filters on time with the right grade. Fix small leaks and odd noises before they become big ones. Keep the tyres inflated and the underside washed in winter to hold off rust. Read the manual once; it is shorter than you think.'
        }
      ],
      conclusion: 'None of this is expensive or difficult. It is just consistent, and consistency is what engines reward.'
    }
  }
];
