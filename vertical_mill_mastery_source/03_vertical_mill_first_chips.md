# Chapter 3: Initial Cutting Operations

**Author**: Johanness A. Nilsson  
**Date**: August 2025  
**Version**: 1.0

---

## Table of Contents

1. [Introduction](#introduction)
2. [Cutting Tool Technology](#cutting-tool-technology)
3. [End Mill Selection and Classification](#end-mill-selection)
4. [Work Holding with Parallels](#work-holding-with-parallels)
5. [Cutting Parameter Fundamentals](#cutting-parameters)
6. [Chip Formation Theory](#chip-formation-theory)
7. [Surface Generation and Quality](#surface-generation)
8. [First Cutting Operations](#first-operations)
9. [Chip Management and Safety](#chip-management)

## Introduction

This chapter transitions from machine setup to active cutting operations,
marking the beginning of productive work on the vertical milling machine.
Building upon the foundation established in Chapters 1 and 2 regarding
machine components and setup procedures, we now examine the cutting process
itself.

The vertical mill's capabilities fundamentally depend on multi-point cutting
tools, representing a significant technological advancement over earlier
single-point systems used in planers and shapers. While the mechanical
structure of the mill employs traditional slide technology, the cutting
tools embody sophisticated engineering principles that enable complex
material removal operations.

This chapter establishes the theoretical and practical framework for
beginning milling operations, emphasizing systematic approaches to tool
selection, cutting parameters, and process control. Understanding these
fundamentals ensures consistent results and safe operation while developing
the skills necessary for precision machining work.

## Cutting Tool Technology

### Multi-Point Cutter Development

The advancement of multi-point cutting tool technology enabled the practical
development of vertical milling machines. Unlike earlier single-point systems
used in planers and shapers, multi-point cutters allow simultaneous engagement
of multiple cutting edges, dramatically increasing material removal rates while
improving surface finish quality.

Milling cutters concentrate significant technological sophistication in their
design and manufacture. While machine mechanics employ traditional slide
systems, cutting tools represent the culmination of metallurgical and
geometrical engineering principles that enable complex machining operations.

### End Mill Selection and Classification {#end-mill-selection}

#### Tool Quality Considerations

End mill selection involves balancing cost, performance, and application
requirements. Entry-level imported tools provide learning opportunities at
minimal investment but suffer from inconsistent geometry and limited tool
life. Professional-grade cutters deliver superior performance through
precise manufacturing and advanced materials.

**Quality Categories:**

- **Economy Tools**: Suitable for initial learning and non-critical
  applications. Expect rapid dulling and inconsistent results.
- **Professional Tools**: Mid-range cutters offering excellent value for
  precision work. Brands like Harvey Tool provide reliable performance.
- **Premium Tools**: Industrial-grade cutters optimized for production
  environments. Expensive but offer maximum performance and tool life.

#### Roughing End Mills

Roughing end mills feature distinctive "corn cob" geometry with serrated
cutting edges. This design enables aggressive material removal with reduced
cutting forces by breaking chips into small segments. The interrupted cutting
action reduces heat buildup but produces rougher surface finishes requiring
subsequent finishing operations.

**Applications:**

- Heavy stock removal operations
- Pocket clearing and profiling
- Preliminary surface preparation
- Material removal prior to finishing

#### Finishing End Mills

Finishing end mills employ smooth cutting edges optimized for surface quality
rather than maximum material removal. Available in multiple flute
configurations to match specific material requirements and cutting conditions.

**Two-Flute Design**: Optimal for softer materials including aluminum and
brass. Larger flute valleys provide enhanced chip evacuation essential for
materials producing continuous chips. The reduced number of cutting edges
lowers cutting forces and power requirements.

**Four-Flute Design**: Preferred for steel and harder materials. Additional
cutting edges improve surface finish and extend tool life in harder materials.
Increased flute count provides better rigidity for precision operations.

#### Specialized End Mills

**Ball End Mills**: Hemispherical cutting ends enable complex three-dimensional
profiles and internal radii. Essential for mold work and sculptured surfaces.

**Long-Reach End Mills**: Extended length enables deep pocket machining and
hard-to-reach areas. Reduced rigidity requires conservative cutting parameters.

**Chamfer Mills**: Angled cutting geometry creates beveled edges and chamfers.
Carbide construction handles the high speeds required for clean edge quality.

### Facing Tool Options

#### Shell Mills

Shell mills represent excellent compromise tools for smaller machines. These
high-speed steel cutters feature hollow construction reducing material cost
while maintaining rigidity. Similar to oversized end mills, shell mills
can machine square corners and provide excellent surface finishes on lower-
horsepower machines.

#### Fly Cutters

Fly cutters employ single-point geometry similar to lathe tools but rotate
in the milling machine spindle. The angled lathe-tool bit produces excellent
surface finishes with minimal power requirements, making them suitable for
light machines.

**Advantages:**

- Exceptional surface finish capability
- Low cutting forces and power requirements
- Inexpensive to construct and maintain
- Single cutting edge eliminates tool marks

**Limitations:**

- Slow material removal rates
- Limited to shallow cuts
- Reduced rigidity compared to multi-point cutters
- Requires very slow feed rates

## Work Holding with Parallels {#work-holding-with-parallels}

### Parallel Function and Design

Parallels serve as precision reference surfaces that translate the vise's
accuracy to more convenient working heights. By elevating workpieces above
the vise jaws, parallels maintain the critical 90-degree relationship between
the fixed jaw and vise base while providing clearance for machining operations.

### Parallel Quality Requirements

Precision parallels must maintain dimensional accuracy within 0.0001 inches
to preserve machining accuracy. Quality parallels exhibit:

- Parallel surfaces within 0.0001 inches over their length
- Matched height within sets to prevent workpiece tilting
- Square edges for accurate reference positioning
- Hardened surfaces for durability and dimensional stability

Entry-level parallel sets often provide adequate accuracy for general
machining work, typically maintaining tolerances within 0.0005 inches.

### Parallel Selection and Application

**Standard Sets**: Most parallel sets include matched pairs ranging from
1/8 inch to 1 inch in height, maintaining constant thickness. This variety
accommodates most common workpiece heights while ensuring proper vise clamping.

**Specialty Parallels**: Specific applications may require thin parallels for
small workpieces, thick parallels for heavy stock, or wavy parallels for
irregular surfaces.

### Proper Parallel Usage

Correct parallel installation maintains workpiece accuracy:

1. Select parallel height providing adequate vise jaw engagement
2. Place matched pair ensuring equal support across workpiece width
3. Position parallels to avoid interference with cutting operations
4. Verify parallel seating before applying vise pressure
5. Confirm workpiece stability before machining

## Material Selection for Initial Operations

### Aluminum Advantages in Milling

Aluminum presents excellent characteristics for beginning milling operations.
Unlike lathe work where continuous chips create difficulties, milling's
interrupted cutting action automatically breaks aluminum chips into manageable
segments. This eliminates the stringy chip problems associated with aluminum
in turning operations.

**Aluminum Benefits:**

- Automatic chip breaking due to interrupted cuts
- Excellent surface finish capability
- Low cutting forces reduce machine stress
- Forgiving of parameter variations
- Readily available and economical

### Surface Reference Establishment

The first machined surface becomes the reference datum for subsequent
operations. Proper reference establishment requires careful attention to
surface preparation and depth control.

**Irregular Stock Preparation**: Raw stock often exhibits uneven surfaces
from cutting or forming operations. Identify the highest surface point through
visual inspection and use this location for initial tool positioning. This
ensures consistent depth control across the entire surface.

**Progressive Material Removal**: Rather than attempting complete surface
cleanup in a single pass, employ multiple light cuts to gradually establish
a true reference surface. This approach provides better dimensional control
and superior surface finish.

## Cutting Parameter Fundamentals {#cutting-parameters}

### Speed and Feed Theory

Cutting parameters represent the mathematical relationship between material
properties, tool geometry, and machine capabilities. Unlike lathe operations
where single-point tools maintain constant engagement, milling involves
complex interactions between multiple cutting edges and varying chip loads.

### Surface Speed Calculation

Surface speed (SFPM - Surface Feet Per Minute) determines the linear velocity
of the cutting edge relative to the workpiece. This fundamental parameter
affects tool life, surface finish, and cutting efficiency.

**Formula**: SFPM = (π × Diameter × RPM) / 12

Where:

- Diameter = Cutter diameter in inches
- RPM = Spindle revolutions per minute
- 12 = Conversion factor (inches to feet)

### Material-Specific Speed Recommendations

**Aluminum (6061-T6)**:

- High-Speed Steel: 200-400 SFPM
- Carbide: 800-1200 SFPM

**Mild Steel (1018)**:

- High-Speed Steel: 80-120 SFPM
- Carbide: 400-600 SFPM

**Stainless Steel (304)**:

- High-Speed Steel: 40-80 SFPM
- Carbide: 200-400 SFPM

### Feed Rate Fundamentals

Feed rate determines the material removal rate and surface finish quality.
Expressed as either feed per tooth (FPT) or inches per minute (IPM),
feed rate must balance productivity with surface quality requirements.

**Feed Per Tooth Calculation**: FPT = IPM / (RPM × Number of Flutes)

**Typical Feed Rates (FPT)**:

- Aluminum: 0.003-0.008 inches per tooth
- Steel: 0.002-0.005 inches per tooth
- Roughing operations: Higher feeds for material removal
- Finishing operations: Lower feeds for surface quality

### Practical Parameter Selection

For initial operations with end mills under 1/2 inch diameter:

**Starting Parameters**:

- Speed: 800 RPM for HSS tools in aluminum
- Feed: Hand feed with moderate pressure
- Depth: 0.050 inches maximum for first attempts

Larger face mills require reduced speeds due to increased cutting forces:

- 1-inch face mill: Start at 500 RPM
- Adjust parameters based on machine response and surface quality

## Chip Formation Theory {#chip-formation-theory}

### Interrupted Cutting Dynamics

Milling operations fundamentally differ from turning through their interrupted
cutting action. Each cutting edge periodically engages and disengages from
the workpiece, creating discrete chip segments rather than continuous ribbons.
This characteristic provides significant advantages in material removal and
heat management.

### Chip Formation Mechanisms

During milling, each cutting edge encounters the workpiece material at a
specific angle determined by the tool geometry and feed rate. As the cutting
edge advances through the material, it creates a chip through plastic
deformation and subsequent fracture.

**Chip Formation Stages**:

1. **Initial Contact**: Cutting edge contacts workpiece surface
2. **Plastic Deformation**: Material deforms under cutting forces
3. **Shear Zone Development**: Concentrated stress creates failure plane
4. **Chip Separation**: Material fractures along shear plane
5. **Chip Evacuation**: Formed chip exits cutting zone

### Material-Specific Chip Characteristics

**Aluminum Chips**: Generally form short, easily broken segments due to the
material's ductility and the interrupted cutting action. Aluminum's thermal
conductivity helps dissipate heat, reducing tool wear and enabling higher
cutting speeds.

**Steel Chips**: Produce longer, more continuous segments requiring adequate
chip evacuation space. Higher strength materials create increased cutting
forces and heat generation, demanding more robust tooling and conservative
parameters.

### Chip Evacuation Requirements

Effective chip removal prevents re-cutting, which damages surface finish
and accelerates tool wear. Milling operations must provide adequate clearance
for chip evacuation through proper tool selection and cutting fluid application.

**Chip Clearance Factors**:

- Flute geometry and depth
- Cutting fluid flow and pressure
- Table feed rate and direction
- Workpiece configuration and setup

## Surface Generation and Quality {#surface-generation}

### Surface Formation Mechanisms

Milled surfaces result from the cumulative effect of individual cutting edge
passes across the workpiece. Surface quality depends on tool condition,
cutting parameters, machine rigidity, and setup accuracy.

### Surface Finish Factors

**Feed Rate Impact**: Higher feed rates increase feed marks (cusps) between
adjacent cutting passes. These marks directly correlate to the feed per tooth
value and can be calculated mathematically.

**Tool Geometry Effects**: Sharp tools produce superior finishes but require
careful handling. Worn tools create surface defects through material tearing
rather than clean cutting.

**Machine Vibration**: Any dynamic instability in the machine-tool-workpiece
system appears as chatter marks on the finished surface. Proper setup and
conservative parameters minimize vibration.

### Finish Quality Requirements

Different applications require specific surface finish standards:

- **Rough Machining**: 125-250 μin Ra (acceptable for non-critical surfaces)
- **General Machining**: 32-125 μin Ra (standard for most applications)
- **Precision Finishing**: 16-32 μin Ra (required for mating surfaces)
- **Surface Grinding Alternative**: <16 μin Ra (achievable with proper
  technique)

## First Cutting Operations {#first-operations}

### Initial Setup Procedures

#### Tool Positioning and Reference Establishment

Proper operation begins with systematic tool positioning relative to the
workpiece. Position the cutter near but not touching the work surface using
coarse machine adjustments. This preliminary positioning minimizes subsequent
fine adjustments while ensuring adequate clearance for safe approach.

**Positioning Sequence**:

1. Lower spindle column to approximate working height
2. Position table to place cutter near workpiece edge
3. Note any mechanical noise from power feed systems (normal operation)
4. Adjust spindle speed according to calculated parameters

#### Depth Control Methods

The machine quill provides convenient depth control for light cuts without
requiring column adjustment. This method offers adequate rigidity for aluminum
and other soft materials while simplifying operation.

**Depth Setting Procedure**:

1. Lower quill using fine feed until cutter just touches work surface
2. Note initial reading on digital readout or dial indicator
3. Raise quill clear of surface
4. Zero the depth measurement system
5. Lower to desired depth of cut (0.050" maximum for initial attempts)

**Note**: Mechanical locking may cause slight position changes. If precise
depth control is required, unlock, readjust, and re-lock until achieving
the desired reading under locked conditions.

### Cutting Fluid Application

Cutting fluid improves surface finish, extends tool life, and aids chip
evacuation. For aluminum machining, light oil or specialized cutting fluids
provide adequate lubrication and cooling.

**Fluid Application Methods**:

- Brush application before cutting
- Spray bottles for periodic application
- Flood systems for production work
- WD-40 as expedient substitute for aluminum

### Manual Feed Techniques

Beginning operators should develop proper feed control through manual
operation before considering power feeds. Manual control provides immediate
feedback regarding cutting conditions and tool behavior.

**Feed Control Guidelines**:

- Maintain steady, consistent pressure
- Listen for changes in cutting sounds
- Feel for excessive resistance or vibration
- Observe chip formation and evacuation
- Stop immediately if unusual conditions develop

**Learning Curve Development**: Proper feed rates develop through practice
and experience. Begin conservatively and gradually increase aggressiveness
as familiarity with machine response improves.

## Chip Management and Safety {#chip-management}

### Chip Control Importance

Unlike lathe operations where chips naturally fall away from the work area,
milling operations tend to accumulate chips on horizontal surfaces. Chip
re-cutting causes dimensional errors, poor surface finish, and accelerated
tool wear.

### Chip Re-cutting Problems

**Dimensional Impact**: Re-cut chips act as abrasive particles between the
tool and workpiece, effectively increasing the depth of cut and creating
unpredictable dimensional variations.

**Tool Damage**: Hardened chips from previous cuts may exceed the hardness
of subsequent material, causing excessive tool wear, chipping, or breakage.

**Surface Quality**: Re-cutting produces torn rather than cleanly cut surfaces,
resulting in poor finishes and potential workpiece rejection.

### Chip Removal Methods

#### Flood Coolant Systems

Flood coolant provides optimal chip evacuation through high-volume fluid flow.
These systems require significant infrastructure investment and are typically
found in production environments rather than small shops.

#### Compressed Air

Compressed air effectively removes dry chips from cutting areas. Exercise
caution to avoid blowing chips toward operator or into machine ways where
they may cause wear or accuracy problems.

#### Manual Removal

**Safe Procedures**:

1. **STOP** spindle rotation completely before approaching cutting area
2. Use chip brushes or hooks - never hands
3. Allow chips to cool before handling (particularly steel chips)
4. Wear safety glasses when using compressed air
5. Clean chips from table surface and machine ways

### Critical Safety Warnings

**Hand Protection**: Fresh chips exhibit extremely sharp edges capable of
causing severe cuts. Steel chips may reach temperatures exceeding 500°F
during cutting operations.

**Eye Protection**: Compressed air or cutting fluid spray can propel chips
at high velocity. Safety glasses with side shields are mandatory during
all milling operations.

**Machine Protection**: Chips accumulated in machine ways cause premature
wear and accuracy degradation. Maintain clean machine surfaces for optimal
performance and longevity.

## Chapter Summary

This chapter established the fundamental principles governing initial milling
operations, from tool selection through first cutting procedures. Key concepts
you should understand at this point include:

- Multi-point cutter technology enabling efficient material removal
- Systematic approach to cutting parameter selection
- Theoretical foundation of chip formation and evacuation
- Proper work holding using precision parallels
- Surface finish factors and quality control
- Safe practices for chip management and operator protection

Mastery of these fundamentals provides the foundation for advancing to more
complex milling operations while maintaining safety and accuracy standards.
Subsequent chapters in this wiki book will build upon these principles to
develop comprehensive milling capabilities for high precision machining
applications.
