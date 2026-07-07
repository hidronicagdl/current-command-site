---
title: "Guía de Trinchera: 10 Errores Críticos en el Arranque de Equipos Contra Incendio No Listados (NOM-002-STPS)"
description: "Casos reales y soluciones técnicas en el comisionamiento de bombas contra incendio normadas no listadas. Cómo resolver fugas de humo, baile de presiones y evitar inundaciones."
pubDate: "2026-07-07"
dateModified: "2026-07-07"
author: "José Aguilar"
brandEntity: "Barnes de México / NOM-002-STPS"
tags:
  - "bombas contra incendio no listadas"
  - "NOM-002-STPS cuarto de maquinas"
  - "valvula eliminadora de presion"
  - "falla de arranque motor diesel"
  - "bombeo Barnes contra incendio"
  - "mantenimiento de bombas"
geoEntities:
  - "Guadalajara"
  - "Jalisco"
  - "Zapopan"
  - "Tlaquepaque"
  - "Bajío"
  - "México"
faqs:
  - question: "¿Por qué se eleva la presión hasta 200 PSI si compré una bomba de 125 PSI?"
    answer: "Porque las bombas centrífugas entregan su máxima presión hidrostática en el punto de flujo cero (Shut-off). Durante los segundos de retardo del temporizador de paro, la tubería ya está presurizada y la inercia del motor eleva la presión al límite superior de la curva. La solución no es bajar el presostato, sino instalar una válvula eliminadora de presión."
  - question: "¿Cuántos arranques por hora tolera un motor eléctrico contra incendio antes de quemarse?"
    answer: "Bajo las directrices de diseño industrial y normativas de NEMA, un motor eléctrico de la escala de cuartos de máquinas (por ejemplo, 20 HP o más) no debe registrar más de 6 arranques dentro de una misma hora. El pico de corriente inrush genera un estrés térmico extremo que degrada aceleradamente el aislamiento del embobinado."
  - question: "¿Cómo se debe estructurar el sistema de escape de un motor diésel no listado?"
    answer: "Debe utilizar tubería rígida de acero al carbón Cédula 40 perfectamente soldada, aislada térmicamente, con una junta flexible de acero inoxidable de 30 a 50 cm conectada al múltiple para absorber vibraciones, y una pendiente descendente con válvula de drenaje de condensación para proteger los cilindros."
---

El diseño teórico en un plano de AutoCAD se ve perfecto, pero la realidad de los cuartos de máquinas en México es una historia completamente distinta. Recientemente ejecuté el comisionamiento y arranque de un equipo contra incendios normado pero **no listado** (diseñado bajo los criterios de la NOM-002-STPS). Durante el proceso, nos topamos con una serie de vicios de instalación constructiva que transformaron lo que debía ser un arranque de unos minutos en un reto técnico de varios días.

A continuación, desgloso los 10 errores más recurrentes en campo, los mitos que los provocan y las soluciones de ingeniería consultiva para erradicarlos de una vez por todas.

## 1. El Sistema de Escape en Motores Diésel No Listados: El Peligro del Tubo Flexible Ligero

Al ingresar al cuarto de máquinas, el primer error visible fue el uso de tubería de manguera engargolada ligera (tipo "zapa" o de ventilación ordinaria) extendida a lo largo de todo el trayecto del mofle, sujeta rústicamente con una abrazadera común. 

Bajo la normativa mexicana y las buenas prácticas de seguridad industrial, la instalación del sistema de escape de un motor diésel debe priorizar la **evacuación segura de gases tóxicos** y el **aislamiento térmico**. El uso de tubo flexible comercial en todo el trayecto representa tres riesgos mecánicos severos:

* **Fugas de Monóxido de Carbono:** Las mangueras helicoidales ligeras no son herméticas. Bajo la contrapresión del motor, permiten microfiltraciones de gases nocivos dentro del cuarto de bombas, arriesgando la vida del operador.
* **Restricción de Flujo y Contrapresión (*Backpressure*):** El interior rugoso del tubo flexible genera flujo turbulento. En trayectos largos, eleva la contrapresión, ahogando el motor, restándole potencia de bombeo y sobrecalentando los cilindros.
* **Fatiga Estructural Térmica:** Los gases de escape superan fácilmente los 500 °C. El torque violento del motor en el arranque termina por destemplar, cristalizar y fracturar el metal ligero, provocando un desprendimiento total.

**La Solución de Campo:** La tubería de escape debe ser estrictamente de acero al carbón de cédula robusta (mínimo Cédula 40). El tubo flexible **solo debe usarse en un tramo corto (de 30 a 50 cm) acoplado directamente al múltiple del motor**, actuando exclusivamente como junta de expansión y amortiguador de vibraciones. Todo el trayecto rígido posterior debe estar perfectamente soldado, contar con aislamiento térmico de alta temperatura (fibra de vidrio o roca con chaqueta de aluminio) y dirigirse al exterior por la ruta más corta. 

> **Tip de Trinchera:** El tramo horizontal exterior debe contar con una ligera pendiente descendente hacia la salida o incluir una **válvula de drenaje de condensación** en su punto más bajo. Esto evita que el agua de lluvia o el vapor condensado regresen a las cámaras de combustión, lo que provocaría un doblez de bielas o daño catastrófico por choque hidráulico. La salida debe rematarse con un corte a 45° hacia abajo o una tapa contrapesada móvil (*rain cap*).

## 2. El Mapa Eléctrico del Cuarto de Máquinas: El Mito de la Alimentación Única

Un vicio alarmante entre las cuadrillas de instalación eléctrica general es asumir que alimentar uno de los tableros de control es suficiente para energizar el resto de los periféricos del sistema. En este proyecto tuvimos que detener el proceso para corregir la distribución, ya que pretendían "puentear" las señales.

Cada componente de la triada contra incendio cumple una función crítica de seguridad y requiere autonomía eléctrica. El motor diésel, por ejemplo, incorpora un precalentador de bloque (que mantiene el refrigerante a una temperatura óptima para garantizar un arranque instantáneo en frío). Este componente jamás debe conectarse al tablero de control diésel; requiere su propia protección termomagnética. El tablero diésel monofásico únicamente debe encargarse de alimentar los cargadores de las baterías.

Para blindar la operación, todo cuarto de máquinas contra incendio debe estructurarse bajo un esquema de acometidas completamente independientes que provengan directamente del centro de carga principal dispuesto para la emergencia:

| # | Línea de Alimentación Requerida | Tipo de Carga / Fase | Destino Técnico en el Cuarto |
| :--- | :--- | :--- | :--- |
| **1** | Alimentación Bomba Eléctrica Principal | Trifásica (220V / 440V) | Controlador Eléctrico Principal |
| **2** | Alimentación Bomba Jockey | Trifásica / Monofásica | Controlador de la Bomba Mantenedora |
| **3** | Alimentación Cargador de Baterías Diésel | Monofásica (115V / 230V) | Tablero de Control del Motor Diésel |
| **4** | Alimentación Precalentador de Bloque | Monofásica (115V / 230V) | Resistencia Térmica del Bloque de Cilindros |

## 3. El Hack del Purgado Hidráulico por Vaso Comunicante

El sistema en cuestión contaba con un arreglo de succión positiva (el nivel mínimo del agua en la cisterna se encontraba físicamente por encima de la línea central de las carcasas de las bombas). Teóricamente, el purgado debería ser una tarea simple de unos minutos. Sin embargo, al intentar liberar el aire atrapado en los cuerpos de la bomba eléctrica y la bomba diésel, nos encontramos con que los tornillos de purga de las volutas estaban completamente agarrotados y excesivamente apretados de fábrica; forzarlos en ese momento implicaba el riesgo de barrer la cuerda o quebrar el tapón.

Para resolver este contratiempo sin retrasar la obra ni dañar los equipos, aplicamos un principio básico de vasos comunicantes aprovechando las características del diseño hidráulico de la instalación:

1. El *manifold* o cabezal de descarga general del sistema contaba con una válvula de purga auxiliar instalada en la parte superior.
2. Esta purga auxiliar se encontraba físicamente por encima de la descarga de las bombas, pero todavía por debajo del nivel hidrostático de la cisterna de almacenamiento.
3. Procedimos a abrir por completo las válvulas de seccionamiento de la succión.
4. Posteriormente, abrimos las válvulas de descarga de las bombas. Debido a que la purga del *manifold* estaba abierta y situada estratégicamente en el plano elevado del arreglo de tuberías del cuarto, el agua de la cisterna desplazó de forma natural y por gravedad estática todo el aire atrapado en el interior de las carcasas y las líneas, expulsándolo por el cabezal.

A pesar de contar con válvulas check instaladas en la descarga de cada bomba, la contrapresión del llenado y la ubicación de la purga auxiliar nos permitieron certificar un cebado perfecto al 100% en ambos equipos, facilitando el trabajo mecánico sin necesidad de intervenir los tapones de las volutas.

## 4. Estanqueidad Mecánica: La Soportería Innegociable en Tubería Ranurada

Una vez que logramos presurizar el lazo con la bomba jockey, la realidad de la instalación saltó a la vista: comenzaron a brotar fugas y goteos en múltiples uniones del cuarto de máquinas. El contratista general, presionado por el tiempo y la presencia de los supervisores, pretendía acelerar el encendido final, lo cual es un error garrafal de gestión de obra.

El uso de sistemas de unión ranurada (*grooved couplings*) se ha popularizado enormemente debido a su velocidad de armado en comparación con las uniones soldadas o bridadas. Sin embargo, muchos instaladores olvidan que el cople ranurado posee una flexibilidad intrínseca. Si la tubería carece de una soportería estructural rígida, calculada para absorber el peso del agua y las fuerzas de torsión dinámicas, las uniones sufrirán micro-deflexiones elásticas bajo presión, desgarrando los empaques de neopreno y detonando fugas en cadena.

> **Criterio de Control de Obra:** Jamás te fíes de una instalación visual. El protocolo de ingeniería consultiva exige probar la tubería hidrostáticamente por secciones aisladas conforme se va armando. Es mucho más económico y rápido corregir un cople mal asentado a solas con tu cuadrilla durante la fase de montaje, que lidiar con un reventón de empaque frente a una decena de testigos y directivos el día de la entrega oficial. La soportería rígida perimetral en cada cambio de dirección no es opcional: es la que garantiza la geometría estable del sistema.

## 5. El Temporizador de Paro y la Regla de Fatiga Térmica en Motores Eléctricos

Con las fugas de la tubería finalmente subsanadas, procedimos al arranque de la bomba eléctrica de 20 HP. El motor encendió correctamente, demostró capacidad hidráulica abriendo un hidrante de prueba, pero al cerrar la demanda, el equipo continuó girando indefinidamente sin apagarse. Esto provocó impaciencia entre los testigos de la obra, quienes asumieron que el sistema estaba fallando.

Al revisar el controlador, detectamos que el temporizador de retardo de paro (*run period timer*) estaba configurado de fábrica en 10 minutos. Para demostrarles la correcta lógica operativa, ajusté temporalmente el dispositivo a 1 minuto; el equipo alcanzó su setpoint, contabilizó los 60 segundos y ejecutó el paro sin inconvenientes. Posteriormente, regresé el temporizador a su ajuste original de 10 minutos por una razón de física eléctrica innegociable.

Los motores eléctricos industriales de inducción experimentan un fenómeno crítico denominado **corriente de arranque o Inrush**. Al encender a tensión plena, el motor demanda entre 6 y 8 veces su corriente nominal durante los primeros segundos. Esta sobrecorriente genera un calentamiento por efecto Joule sumamente agresivo en los devanados del estator. 

De acuerdo con las directrices de NEMA y los estándares de diseño industrial, un motor de esta escala **no debe encenderse más de 6 veces en el lapso de una hora**. Si el temporizador de paro se elimina o se calibra a cero segundos, cualquier micro-fuga o fluctuación rápida en la red provocaría un cicleo constante (arranques y paros sucesivos en pocos minutos). Este cicleo acumula calor térmico residual que termina por carbonizar el aislamiento del embobinado, quemando el motor por completo. El temporizador de 10 minutos garantiza que el motor permanezca encendido el tiempo necesario para disipar el calor del arranque inicial a través de su propio ventilador, protegiendo mecánicamente el activo.

## 6. El "Baile de Presiones" y por qué ajustar los presostatos no sustituye a una Válvula Eliminadora de Presión

Este es uno de los dolores de cabeza más comunes en la ingeniería de campo B2B. El cliente adquiere un sistema dimensionado para entregar una presión nominal de 125 PSI y procede a instalar tuberías, válvulas y accesorios timbrados estrictamente con una clasificación estándar Clase 125#. El grave error de concepto aquí es asumir que la bomba se detendrá mágicamente al tocar los 125 PSI.

Analicemos la física real de la curva hidrodinámica de una bomba centrífuga:

Presión (PSI)
^
200 | * (Punto de Cierre / Shut-off / Flujo Cero)
|    *
125 |        * (Punto Nominal de Diseño)
|            *
+-------------------------------> Caudal (GPM)

Cuando la bomba jockey o la principal arrancan para presurizar la red, el fluido llena la tubería rápidamente. Al llegar al umbral de los 125 PSI, el presostato manda la señal eléctrica de paro al tablero. Sin embargo, debido al temporizador de retardo obligatorio que acabamos de explicar, el motor continúa girando durante varios minutos. Al no existir una demanda de flujo abierta (hidrantes y rociadores cerrados), la bomba se desplaza inmediatamente hacia el extremo izquierdo de su curva hidráulica: el **punto de cierre o Shut-off**. 

En cuestión de 5 segundos a flujo cero, una bomba calculada para 125 PSI nominales puede levantar con facilidad **200 PSI** debido a la energía cinética acumulada dentro de la voluta. Al ver el manómetro en 200 PSI, el cliente entra en pánico por miedo a que estalle la tubería ranurada y exige que se "le baje la presión al presostato".

**La Trampa del Ajuste Manual:** Si cedes a este error y bajas el presostato de paro a 110 PSI, la inercia del motor durante el tiempo de retardo volverá a elevar la presión hidrostática a 200 PSI exactamente igual. Peor aún, al alterar ese rango, interfieres con los setpoints de arranque de la bomba eléctrica y la diésel, descalibrando la cascada matemática y desatando un **"baile de presiones"** errático donde los tres presostatos se traslapan, los tableros entran en conflicto y el sistema se vuelve incontrolable.

**La Solución Robusta de Ingeniería:** Deja los presostatos configurados en sus setpoints de diseño originales y mantén los tiempos de retardo normativos. La sobrepresión en punto de cierre no se soluciona electrónicamente; se resuelve mecánicamente instalando una **Válvula Eliminadora de Presión (Casing Relief Valve)** en el *manifold* de descarga. Esta válvula se calibra, por ejemplo, a 145 PSI. En el momento en que la presión supera ese umbral seguro durante el ciclo de retardo, la válvula se abre de forma puramente mecánica, aliviando el exceso hidrostático y manteniendo el cuarto de máquinas estabilizado en presiones seguras para la tubería Clase 125#. Al concluir el tiempo del timer y detenerse el motor, la válvula se cierra automáticamente, conservando la red perfectamente presurizada.

## 7. Alimentación y Retorno Invertidos en el Tanque de Combustible

Al transicionar hacia el módulo térmico diésel (una vez erradicadas las fugas de humo del escape), ejecutamos el arranque. El motor encendía de forma enérgica, sostenía la marcha durante un par de segundos y se apagaba súbitamente de forma sistemática. Realizamos múltiples purgas en la línea de suministro asumiendo que se trataba de aire atrapado, pero el síntoma persistía.

Al realizar una inspección quirúrgica de la instalación de combustible, descubrimos que la cuadrilla de mecánicos había **conectado al revés las líneas de diésel**: la manguera de succión que venía del tanque fue acoplada al puerto de retorno del motor, y la línea de retorno térmico fue dirigida hacia la succión del tanque. 

Para evitar este vicio oculto en obras nuevas, el protocolo de campo exige trazar la ruta del combustible de forma visual y sin escalas, independientemente de la marca del motor:

+-----------------+      +--------------------+      +-------------------------+
| Tanque de Diésel| ---> | Filtro de Combustible| ---> | Bomba de Inyección Alta |
|  (Línea Succión)|      |  (Puerto Entrada)  |      |   (Distribución Motor)  |
+-----------------+      +--------------------+      +-------------------------+
|
+-----------------+                                               v
| Tanque de Diésel| <--------------------------------------------+
|  (Línea Retorno)|              (Línea de Retorno General)
+-----------------+

Los bloques de los motores contra incendio ya vienen preparados de fábrica con puertos roscados específicos para la alimentación y el retorno. Intercambiarlos provoca que la bomba de inyección intente succionar a través de los ductos de alivio de los cilindros, quedándose sin carga volumétrica a los pocos segundos de encender. Al corregir la posición de los acoplamientos y re-purgar el circuito, el motor Barnes operó de manera continua y estable.

## 8. El Solenoide de Corte y el "Chicote" Mecánico Flojo

Con el motor diésel estabilizado hidrodinámicamente, se presentó el siguiente dilema operativo: al presionar el botón de paro o cumplirse el ciclo en el controlador automático, el tablero enviaba la señal, la pantalla registraba una alerta de "Falla al Paro", pero el motor térmico continuaba revolucionando a velocidad plena.

A diferencia de un motor de gasolina que se apaga cortando la chispa eléctrica, un motor diésel industrial se apaga interrumpiendo de forma absoluta el suministro de combustible hacia los inyectores. Esto se ejecuta mediante una **válvula solenoide de corte de combustible**. Para aislar el origen de la falla, implementamos el siguiente protocolo de diagnóstico:

1. Identificamos en el diagrama eléctrico del controlador el borne de salida hacia el solenoide.
2. Simulamos la señal de control aplicando un voltaje directo de 12V al cuerpo del solenoide. Al energizar y desenergizar de forma manual, constatamos que el componente electromecánico respondía con fuerza y se desplazaba correctamente. El problema no era eléctrico ni del tablero.
3. Al inspeccionar el varillaje mecánico, detectamos que el opresor del cable flexible (chicote) que conecta el solenoide con la palanca de la cremallera de inyección de diésel estaba completamente flojo. 

El solenoide se accionaba magnéticamente, pero al estar el cable destensado, la palanca de combustible jamás se movía de la posición de inyección completa (abierta). Ajustamos mecánicamente la tensión del chicote utilizando herramientas de mano, asegurando el recorrido total de la palanca, y el motor comenzó a encender y apagar en modo automático de forma impecable.

## 9. La Trampa del Cuarto de Máquinas Subterráneo y el Caudal de Alivio de Enfriamiento

El motor diésel operaba y cortaba de forma perfecta, pero aquí se presentó un error crítico de diseño civil y arquitectónico que estuvo a punto de causar un desastre mayor: la inundación completa del cuarto de máquinas. El recinto de bombeo se encontraba ubicado en un nivel de fosa subterránea, dependiendo exclusivamente de una pequeña bomba de achique residencial de 0.5 HP para evacuar cualquier acumulación de agua.

Los motores diésel de alta especificación contra incendio incorporan una lógica de protección térmica durante su ciclo de enfriamiento posterior a la operación. El bloque Barnes cuenta con dos válvulas solenoides en la descarga hidráulica diseñadas para abrirse deliberadamente cuando la presión de la red se eleva a flujo cero. El objetivo es liberar un flujo constante de agua para disipar la energía térmica acumulada y refrigerar los componentes internos del tren motriz durante los 3 minutos obligatorios de operación previa al paro.

El contratista cometió la gravísima omisión de dejar estas líneas de alivio descargando de forma libre y abierta directamente sobre el piso del cuarto de máquinas, asumiendo que la bomba de 0.5 HP de la fosa sería suficiente para contener el volumen. En la realidad, el caudal de alivio desalojado por el sistema superó instantáneamente la capacidad de bombeo del achique, elevando el nivel del agua en el suelo a una velocidad alarmante.

> **Regla de Oro de Diseño Civil:** Todas las líneas provenientes de las válvulas eliminadoras de presión, los alivios de las carcasas y las purgas automáticas de los controladores deben ser **canalizadas y conducidas mediante tubería rígida independiente hacia el exterior del cuarto de máquinas**, dirigiéndolas de regreso a la cisterna o al drenaje general por gravedad. Confiar la integridad de motores diésel y tableros eléctricos a una pequeña bomba de achique en el piso es una ruleta rusa de ingeniería.

## 10. Contaminación por Desechos de Obra y la Necesidad de una Disciplina de Limpieza

Para agravar el escenario del cuarto subterráneo, el piso de la fosa estaba saturado de basura y desperdicios abandonados por las cuadrillas de instalación general: retazos de empaques, restos de cinta teflón, madera, plásticos de embalaje y estopa de limpieza. 

Durante las pruebas dinámicas, el agua de alivio arrastró estos materiales hacia la fosa de succión de la bomba de achique, obstruyendo la rejilla del impulsor en cuestión de segundos, deteniendo la evacuación de agua y acelerando el riesgo de inundación. 

Aunque una solución robusta en proyectos subterráneos de gran envergadura es la especificación de una **bomba trituradora de cárcamo** (capaz de procesar sólidos suspendidos y evitar bloqueos mecánicos), ninguna tecnología sustituye a la disciplina operativa básica de la obra limpia. Antes de girar el interruptor de arranque de un equipo contra incendio, el cuarto de máquinas debe ser barrido, lavado y despojado de cualquier residuo constructivo. Un pedazo de plástico flotante es capaz de inhabilitar los sistemas de drenaje de emergencia, inundando componentes eléctricos costosos y dejando fuera de servicio la protección de toda la planta.

## Conclusión: La Autoridad Técnica se Gana en la Norma

El comisionamiento de un sistema contra incendio normado no listado demuestra que la ausencia de un sello UL/FM no exime al proyecto de cumplir con las leyes estrictas de la física y la hidráulica industrial. En el mercado mexicano actual, la construcción está plagada de costumbres empíricas heredadas por "expertos de oído" que repiten mitos técnicos como si fuesen normativas vigentes.

Si tienes bajo tu responsabilidad la supervisión, entrega o recepción de un cuarto de máquinas contra incendio, el consejo maestro es contundente: **estudia, comprende y domina el porqué mecánico de cada componente.** Conocer con exactitud la resistencia de los materiales ante presiones de cierre, la distribución eléctrica autónoma exigida por la NOM-002-STPS y los requerimientos de alivio térmico es la única herramienta que te otorgará la autoridad técnica en la toma de decisiones frente a tus contratistas generales. No te confíes en lo que los terceros te digan en la obra; la preparación previa en la norma es el único secreto para garantizar un arranque exitoso de un sistema diseñado para defender vidas y patrimonios.