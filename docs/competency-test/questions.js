// Vertical Mill Mastery Competency Test Questions
// Based on Chapters 01-07 of the Vertical Mill Mastery Wikibook
// Author: Generated from source materials by Johanness A. Nilsson

const questions = [
    // SAFETY RULES AND PRACTICES (15+ questions)
    {
        question: "What is the most critical personal protective equipment required at all times during milling operations?",
        options: [
            "Work gloves for hand protection",
            "Safety glasses with side shields",
            "Steel-toed boots",
            "Hearing protection"
        ],
        correctAnswer: 1,
        explanation: "Safety glasses with side shields are mandatory at all times during milling operations due to chip ejection hazards and cutting fluid spray."
    },
    {
        question: "Why should you never wear loose clothing or jewelry while operating a milling machine?",
        options: [
            "It looks unprofessional",
            "It can get caught in moving machinery causing serious injury",
            "It makes it harder to see measurements",
            "It's against OSHA regulations"
        ],
        correctAnswer: 1,
        explanation: "Loose clothing, jewelry, and unsecured long hair can become entangled in rotating spindles, moving tables, or other machine components, causing severe injury or death."
    },
    {
        question: "When should you attempt to measure or adjust a workpiece during machine operation?",
        options: [
            "When the spindle is running at low speed",
            "Only during climb milling operations",
            "Never - always stop the spindle completely first",
            "When using flood coolant for protection"
        ],
        correctAnswer: 2,
        explanation: "Never attempt to measure or adjust workpieces during operation. Always stop the spindle completely before approaching the cutting area for any reason."
    },
    {
        question: "What is the proper method for removing chips from the work area?",
        options: [
            "Use your hands to quickly brush them away",
            "Use compressed air while the spindle is running",
            "Stop the spindle and use chip brushes or hooks - never hands",
            "Let them accumulate and clean up after the job is complete"
        ],
        correctAnswer: 2,
        explanation: "Fresh chips have extremely sharp edges and may be very hot. Always stop the spindle and use chip brushes or hooks, never bare hands, to remove chips."
    },
    {
        question: "Why are fresh steel chips particularly dangerous to handle?",
        options: [
            "They are magnetic and stick to tools",
            "They have extremely sharp edges and may exceed 500°F temperature",
            "They create toxic fumes when touched",
            "They are electrically conductive"
        ],
        correctAnswer: 1,
        explanation: "Steel chips exhibit extremely sharp edges capable of causing severe cuts and may reach temperatures exceeding 500°F during cutting operations."
    },
    {
        question: "What safety concern is created by chip re-cutting during milling operations?",
        options: [
            "It makes noise that damages hearing",
            "It creates toxic metal dust",
            "It acts as abrasive particles causing dimensional errors and tool damage",
            "It reduces cutting fluid effectiveness"
        ],
        correctAnswer: 2,
        explanation: "Re-cut chips act as abrasive particles between the tool and workpiece, effectively increasing the depth of cut and creating unpredictable dimensional variations while damaging tools."
    },
    {
        question: "Before starting any milling operation, what must you verify about all clamps and tools?",
        options: [
            "They are the newest models available",
            "They are properly secured and tight",
            "They match the workpiece material",
            "They have been recently calibrated"
        ],
        correctAnswer: 1,
        explanation: "Always verify that all clamps and tools are secure before starting the spindle to prevent dangerous tool ejection or workpiece movement."
    },
    {
        question: "What is the primary danger zone characteristic of milling machines compared to lathes?",
        options: [
            "Higher spindle speeds",
            "Larger cutting tools",
            "360-degree danger zones due to table movement and chip ejection",
            "More electrical hazards"
        ],
        correctAnswer: 2,
        explanation: "Unlike lathes where hazards remain relatively localized, mills create 360-degree danger zones due to their table movement and chip ejection patterns."
    },
    {
        question: "When using compressed air to remove chips, what critical safety precaution must be taken?",
        options: [
            "Use only low pressure settings",
            "Wear safety glasses and avoid blowing chips toward operator or machine ways",
            "Only use it on aluminum chips",
            "Ensure the spindle is running at low speed"
        ],
        correctAnswer: 1,
        explanation: "Compressed air can propel chips at high velocity toward the operator or into machine ways where they cause wear. Always wear safety glasses and direct air flow appropriately."
    },
    {
        question: "Why is it dangerous to use a drill chuck to hold end mills during milling operations?",
        options: [
            "The chuck will wear out faster",
            "It reduces cutting speed capability",
            "Chuck jaws cannot resist lateral milling forces, causing tool slippage and safety hazards",
            "It makes tool changes more difficult"
        ],
        correctAnswer: 2,
        explanation: "Drill chucks are engineered for axial loads only. The lateral forces in milling operations cause jaw deflection, tool slippage, and potential safety hazards."
    },
    {
        question: "What should you maintain constant attention on when the mill is operational?",
        options: [
            "The digital readout display",
            "The spindle speed indicator",
            "The workpiece and cutting operation",
            "The power feed controls"
        ],
        correctAnswer: 2,
        explanation: "Maintain constant attention on the workpiece when the mill is operational to immediately detect any problems, unusual sounds, or dangerous conditions."
    },
    {
        question: "How should long hair be managed during milling operations?",
        options: [
            "Covered with a loose cap",
            "Tied up and secured to prevent entanglement",
            "Trimmed short before each operation",
            "Protected with a hair net only"
        ],
        correctAnswer: 1,
        explanation: "Long hair must be tied up and secured to prevent entanglement in rotating spindles or moving machine components."
    },
    {
        question: "What type of footwear is required for safe mill operation?",
        options: [
            "Any comfortable shoes",
            "Non-slip footwear with closed-toe protection",
            "Steel-toed boots only",
            "Rubber boots for electrical protection"
        ],
        correctAnswer: 1,
        explanation: "Non-slip footwear with closed-toe protection is required to prevent slipping and protect feet from dropped tools or sharp chips."
    },
    {
        question: "Why must you maintain clear hands and body position relative to the moving table?",
        options: [
            "To avoid blocking the operator's view",
            "To prevent interference with cutting fluid flow",
            "To avoid crushing injuries from table movement",
            "To maintain better control of feed rates"
        ],
        correctAnswer: 2,
        explanation: "The moving table can cause serious crushing injuries if hands or body parts are caught between the table and stationary machine components."
    },
    {
        question: "What immediate action should you take if unusual conditions develop during cutting?",
        options: [
            "Increase the feed rate to get through the problem area",
            "Add more cutting fluid",
            "Stop immediately and investigate the cause",
            "Switch to climb milling"
        ],
        correctAnswer: 2,
        explanation: "Stop immediately if unusual conditions develop, such as excessive vibration, strange sounds, or unexpected tool behavior, to prevent damage or injury."
    },

    // MACHINE BASICS AND COMPONENTS (10+ questions)
    {
        question: "What is the fundamental design difference between a vertical mill and a drill press?",
        options: [
            "Vertical mills have higher spindle speeds",
            "Drill presses use different motors",
            "Mills have radial bearing systems for multidirectional loading; drill presses have thrust bearings for axial loads only",
            "Mills are larger and heavier"
        ],
        correctAnswer: 2,
        explanation: "Mills utilize radial bearing systems specifically engineered for multidirectional loading, while drill presses employ thrust bearings optimized only for axial loads."
    },
    {
        question: "What is the primary function of the drawbar system in a milling machine?",
        options: [
            "To rotate the spindle",
            "To provide positive mechanical tool retention and enable tool release",
            "To control spindle speed",
            "To measure cutting depth"
        ],
        correctAnswer: 1,
        explanation: "The drawbar system provides positive mechanical retention to maintain secure tool connection during cutting and provides positive ejection force for tool changes."
    },
    {
        question: "What distinguishes a knee mill from a column mill?",
        options: [
            "Knee mills have horizontal spindles",
            "Column mills are always larger",
            "Knee mills move the table vertically; column mills move the spindle head vertically",
            "Knee mills use different cutting tools"
        ],
        correctAnswer: 2,
        explanation: "Knee mills maintain a fixed spindle position while moving the entire table assembly vertically, while column mills raise or lower the entire spindle head assembly."
    },
    {
        question: "What is the purpose of the quill system on a vertical mill?",
        options: [
            "To change spindle speeds automatically",
            "To provide rapid vertical spindle movement independent of the main Z-axis",
            "To hold cutting tools in place",
            "To measure table travel distance"
        ],
        correctAnswer: 1,
        explanation: "The quill provides rapid vertical spindle movement independent of the primary Z-axis positioning system, optimizing both productivity and precision."
    },
    {
        question: "Why do quality collets maintain tool runout within 0.0005 inches?",
        options: [
            "To prevent tool breakage",
            "To enable higher cutting speeds",
            "To achieve accurate hole locations and smooth surface finishes",
            "To reduce tool wear"
        ],
        correctAnswer: 2,
        explanation: "Quality collets maintain precise concentricity essential for achieving accurate hole locations and smooth surface finishes in precision machining."
    },
    {
        question: "What is the most common taper system found on small to medium bench-top mills?",
        options: [
            "Morse Taper",
            "R8 Taper",
            "NT30 Taper",
            "CAT40 Taper"
        ],
        correctAnswer: 1,
        explanation: "R8 taper is the most common system on small to medium bench-top mills, featuring a 7/24 taper angle with keyway orientation and M12x1.75 drawbar threads."
    },
    {
        question: "What critical function do T-slots serve on milling machine tables?",
        options: [
            "They reduce table weight",
            "They provide drainage for cutting fluids",
            "They provide standardized work holding interfaces for clamping systems",
            "They allow for table extension"
        ],
        correctAnswer: 2,
        explanation: "T-slots provide standardized work holding interfaces machined to precision tolerances, serving as reference planes and attachment points for clamping systems."
    },
    {
        question: "Why is backlash more problematic in milling operations than in lathe operations?",
        options: [
            "Milling machines have more complex mechanisms",
            "Milling frequently requires direction changes that engage backlash, unlike mostly unidirectional lathe operations",
            "Milling uses different cutting tools",
            "Milling operations run at higher speeds"
        ],
        correctAnswer: 1,
        explanation: "Unlike lathes where most operations involve unidirectional tool movement, milling frequently requires direction changes that engage backlash, introducing positioning errors."
    },
    {
        question: "What advantage do Digital Readout (DRO) systems provide over hand wheel systems?",
        options: [
            "They are less expensive to maintain",
            "They provide position feedback independent of mechanical backlash",
            "They enable higher cutting speeds",
            "They require less electrical power"
        ],
        correctAnswer: 1,
        explanation: "DRO scales mount directly to moving components, providing position feedback that ignores mechanical backlash in the drive system, allowing precise positioning regardless of approach direction."
    },
    {
        question: "What determines the overall stiffness characteristics of a column mill?",
        options: [
            "The size of the motor",
            "The column's cross-sectional geometry and bearing arrangement",
            "The type of cutting tools used",
            "The spindle speed range"
        ],
        correctAnswer: 1,
        explanation: "The column's cross-sectional geometry and bearing arrangement determine the machine's overall stiffness characteristics and ability to maintain accuracy under heavy cutting loads."
    },

    // SETUP PROCEDURES (5+ questions)
    {
        question: "What is tramming and why is it necessary?",
        options: [
            "Adjusting spindle speed for different materials",
            "Aligning the spindle axis perpendicular to the machine table surface",
            "Setting up the workholding system",
            "Calibrating the digital readout"
        ],
        correctAnswer: 1,
        explanation: "Tramming refers to establishing perpendicular alignment of the spindle axis relative to the machine table surface, which is essential for accurate machining."
    },
    {
        question: "When tramming a mill head, why should measurements be taken at maximum table extent?",
        options: [
            "It's easier to read the indicators there",
            "Geometric principles dictate that measurement accuracy increases with distance from the pivot point",
            "The table is flatter at the edges",
            "It prevents damage to the center of the table"
        ],
        correctAnswer: 1,
        explanation: "Measurement accuracy increases with distance from the pivot point, so measurements taken at maximum table extent provide optimal resolution for angular adjustments."
    },
    {
        question: "What tolerance should be accepted when tramming a mill head?",
        options: [
            "Within 0.005 inches over working area",
            "Within 0.0005 inches over working area",
            "Within 0.001 inches over working area",
            "Perfect alignment only"
        ],
        correctAnswer: 1,
        explanation: "Accept tolerance within 0.0005 inches over the working area when tramming, as this provides adequate accuracy for most machining operations."
    },
    {
        question: "What is the recommended method for vise alignment using a parallel bar?",
        options: [
            "Measure directly on the fixed jaw face",
            "Install parallel bar in vise jaws and indicate along its length",
            "Use a square against the vise base",
            "Align by visual inspection only"
        ],
        correctAnswer: 1,
        explanation: "The parallel bar method involves installing a precision parallel in the vise jaws and indicating along its length, which is more accurate and predictable than direct jaw indication."
    },
    {
        question: "Why should the vise be indicated to align with table travel direction?",
        options: [
            "It looks more professional",
            "It ensures consistent, parallel cuts during longitudinal table movement",
            "It reduces wear on the vise",
            "It makes tool changes easier"
        ],
        correctAnswer: 1,
        explanation: "Establishing parallelism between the vise fixed jaw and the table X-axis travel ensures consistent, parallel cuts during longitudinal table movement."
    },

    // BASIC OPERATIONS (10+ questions)
    {
        question: "What is the fundamental difference between conventional and climb milling?",
        options: [
            "The type of cutting tool used",
            "The spindle speed setting",
            "The relative direction between cutter rotation and workpiece feed",
            "The depth of cut taken"
        ],
        correctAnswer: 2,
        explanation: "Conventional milling occurs when workpiece feed opposes cutter rotation, while climb milling occurs when they move in the same direction at the point of contact."
    },
    {
        question: "Which milling method typically produces superior surface finish?",
        options: [
            "Conventional milling",
            "Climb milling",
            "Both produce identical results",
            "It depends only on cutting speed"
        ],
        correctAnswer: 1,
        explanation: "Climb milling produces superior surface finish due to immediate material engagement at maximum thickness, which produces efficient chip formation with reduced heat generation and work hardening."
    },
    {
        question: "Why might conventional milling be safer on older machines?",
        options: [
            "It uses different cutting tools",
            "It requires lower spindle speeds",
            "It prevents workpiece grabbing on machines with backlash in the feed system",
            "It creates smaller chips"
        ],
        correctAnswer: 2,
        explanation: "Conventional milling is safer on machines with backlash because cutting forces oppose feed direction, preventing dangerous workpiece grabbing that can occur with climb milling."
    },
    {
        question: "What is the primary cutting action location on an end mill during face milling?",
        options: [
            "Across the entire end face of the tool",
            "Only the center cutting edges",
            "At the leading corners where peripheral and end cutting edges intersect",
            "Along the sides of the tool only"
        ],
        correctAnswer: 2,
        explanation: "The primary cutting action occurs at the leading corners where the peripheral and end cutting edges intersect, rather than across the entire end face."
    },
    {
        question: "Why are two-flute end mills preferred for aluminum machining?",
        options: [
            "They cost less than four-flute mills",
            "They run at higher speeds",
            "Superior chip evacuation capability accommodates aluminum's voluminous chips",
            "They last longer in aluminum"
        ],
        correctAnswer: 2,
        explanation: "Two-flute end mills provide superior chip evacuation capability, making them ideal for materials like aluminum that produce continuous or voluminous chips."
    },
    {
        question: "What causes the characteristic surface finish difference between conventional and climb milling?",
        options: [
            "Different cutting speeds are used",
            "Conventional milling creates work-hardened surfaces from gradual engagement; climb milling produces clean shearing action",
            "Climb milling uses sharper tools",
            "The chip formation is identical"
        ],
        correctAnswer: 1,
        explanation: "Conventional milling creates work-hardened surface layers due to gradual engagement and initial rubbing, while climb milling's immediate shearing action reduces work hardening."
    },
    {
        question: "For optimal cutting conditions, how many cutting edges should be simultaneously engaged regardless of end mill flute count?",
        options: [
            "As many as possible for efficiency",
            "Only one cutting edge at a time",
            "Two cutting edges maximum",
            "Half the total number of flutes"
        ],
        correctAnswer: 2,
        explanation: "Optimal cutting conditions limit simultaneous tooth engagement to two cutting edges regardless of total flute count to prevent excessive cutting forces."
    },
    {
        question: "What indicates proper chip formation in milling operations?",
        options: [
            "Black or dark blue chips showing high heat",
            "Powdery, broken chips",
            "Consistent, well-formed chips that are straw-colored to light blue",
            "Long stringy chips that tangle"
        ],
        correctAnswer: 2,
        explanation: "Optimal milling conditions produce consistent, well-formed chips that are straw-colored to light blue, indicating proper cutting temperatures and efficient shearing action."
    },
    {
        question: "What surface speed range is typically recommended for aluminum machining with High-Speed Steel tools?",
        options: [
            "50-100 SFPM",
            "200-400 SFPM",
            "600-800 SFPM",
            "1000-1200 SFPM"
        ],
        correctAnswer: 1,
        explanation: "High-Speed Steel tools in aluminum typically operate at 200-400 SFPM, while carbide tools can handle 800-1200 SFPM due to their superior heat resistance."
    },
    {
        question: "Why is aluminum preferred for beginning milling operations compared to steel?",
        options: [
            "It's less expensive",
            "Interrupted cutting action automatically breaks aluminum chips into manageable segments, unlike the stringy chips in turning",
            "It machines faster",
            "It doesn't require cutting fluid"
        ],
        correctAnswer: 1,
        explanation: "Aluminum's interrupted cutting action in milling automatically breaks chips into manageable segments, eliminating the stringy chip problems associated with aluminum in turning operations."
    },

    // ADDITIONAL COMPREHENSIVE QUESTIONS
    {
        question: "What is the proper technique for supporting a tool during manual drawbar loosening?",
        options: [
            "Let the tool drop freely into a container",
            "Position fingers to prevent tool dropout while maintaining safe hand position",
            "Use a magnet to hold the tool in place",
            "Remove the tool holder first, then the tool"
        ],
        correctAnswer: 1,
        explanation: "Before loosening the drawbar, position fingers to prevent tool dropout while maintaining safe hand position away from cutting edges."
    },
    {
        question: "What is the primary disadvantage of extending the quill for heavy cutting operations?",
        options: [
            "It increases cutting speed requirements",
            "It reduces overall system rigidity due to increased unsupported spindle length",
            "It makes tool changes more difficult",
            "It requires different cutting tools"
        ],
        correctAnswer: 1,
        explanation: "Extended quill position reduces overall system rigidity due to increased unsupported spindle length and reduced bearing span, affecting precision and surface finish."
    },
    {
        question: "According to the milling direction standard, which direction do milling cutters rotate when viewed from above?",
        options: [
            "Counterclockwise",
            "Clockwise",
            "Either direction depending on the operation",
            "Variable based on material type"
        ],
        correctAnswer: 1,
        explanation: "Milling cutters follow the universal standard of clockwise rotation when viewed from above (spindle perspective), which simplifies setup and ensures consistent cutting action."
    },
    {
        question: "What is the recommended approach for roughing versus finishing operations in milling?",
        options: [
            "Use the same parameters for both operations",
            "Use conventional milling for roughing stability, then climb milling for superior finishing",
            "Always use climb milling for both",
            "Use conventional milling exclusively"
        ],
        correctAnswer: 1,
        explanation: "Experienced machinists use conventional milling for roughing operations due to its stability and forgiving nature, then employ climb milling for finishing passes to achieve superior surface quality."
    },
    {
        question: "Why should all dimensions be measured from a single reference corner during machining?",
        options: [
            "It's faster to measure this way",
            "It ensures dimensional errors in stock material are pushed to a single location rather than distributed throughout the part",
            "It prevents tool wear",
            "It reduces cutting time"
        ],
        correctAnswer: 1,
        explanation: "Using a single reference corner ensures that any dimensional errors in the stock material are pushed to a single location rather than being distributed throughout the part, maintaining critical relationships."
    },
    {
        question: "What is the typical accuracy achievable with edge finder techniques?",
        options: [
            "±0.005 inches",
            "±0.002 inches",
            "±0.0005 inches",
            "±0.00001 inches"
        ],
        correctAnswer: 2,
        explanation: "Edge finder methods typically achieve accuracy within ±0.0005 inches, making them suitable for most precision machining applications."
    },
    {
        question: "What is the primary purpose of layout operations in machining?",
        options: [
            "To make the part look professional",
            "To transfer part geometry from engineering drawings to workpiece surfaces, creating visible guidelines for machining",
            "To protect the workpiece surface",
            "To measure final dimensions"
        ],
        correctAnswer: 1,
        explanation: "Layout operations transfer part geometry from engineering drawings to workpiece surfaces, creating visible guidelines that direct subsequent machining operations while providing design verification."
    },
    {
        question: "What accuracy can typically be achieved with layout techniques under controlled conditions?",
        options: [
            "±0.010 inches",
            "±0.005 inches",
            "±0.002 inches",
            "±0.0001 inches"
        ],
        correctAnswer: 2,
        explanation: "Layout techniques typically achieve accuracies within ±0.002 inches under controlled conditions, adequate for most manufacturing applications while offering significant time savings."
    },
    {
        question: "During stock preparation, what is the typical dimensional tolerance of commercially available bar stock?",
        options: [
            "±0.001 to ±0.002 inches",
            "±0.005 to ±0.008 inches",
            "±0.010 to ±0.015 inches",
            "±0.025 to ±0.030 inches"
        ],
        correctAnswer: 2,
        explanation: "Commercially available bar stock typically has dimensional tolerances ranging from ±0.010 to ±0.015 inches, which is adequate for structural applications but insufficient for precision machining."
    },
    {
        question: "What is the proper sequence for establishing a complete workpiece origin?",
        options: [
            "Z-axis, then X-axis, then Y-axis reference",
            "X-axis, then Y-axis, then Z-axis reference",
            "All three axes simultaneously",
            "Y-axis, then Z-axis, then X-axis reference"
        ],
        correctAnswer: 1,
        explanation: "A complete origin requires establishment of X-axis reference (one vertical edge), Y-axis reference (one horizontal edge), and Z-axis reference (top surface) in a systematic sequence."
    }
];

// Export for use in other modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
}