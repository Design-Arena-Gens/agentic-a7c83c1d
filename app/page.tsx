import styles from './page.module.css';

const legendItems = [
  {
    title: 'Ascenso de luz',
    text:
      'El resplandor dorado representa la conexión divina que desciende desde las alturas, iluminando la senda sobre las cumbres del Sinaí.',
  },
  {
    title: 'Custodia celestial',
    text:
      'El ángel se muestra suspendido en movimiento perpetuo, abrazado por alas translúcidas que señalan protección y mensaje a la humanidad.',
  },
  {
    title: 'Memoria del monte',
    text:
      'Las capas de montañas evocan la historia de revelaciones y pactos sagrados que resuenan en el desierto.',
  },
];

export default function Home() {
  return (
    <main className={styles.scene}>
      <section className={styles.content}>
        <h1 className={styles.title}>Ángel descendiendo del monte Sinaí</h1>
        <p className={styles.subtitle}>
          Una composición luminosa que captura el instante en el que un mensajero celestial desciende entre
          brumas doradas hacia las cumbres sagradas.
        </p>
        <div className={styles.legend}>
          <h2>Elementos simbólicos</h2>
          {legendItems.map((item) => (
            <p key={item.title}>
              <strong>{item.title}:</strong> {item.text}
            </p>
          ))}
        </div>
      </section>

      <section className={styles.visual} aria-label="Ilustración de un ángel descendiendo del monte Sinaí">
        <div className={styles.canvas}>
          <div className={styles.sky} />
          <div className={styles.moon} />
          <div className={styles.halo} />
          <div className={styles['light-trail']} />
          <div className={styles.wings}>
            <span className={`${styles.wing} ${styles['wing-left']}`} />
            <span className={`${styles.wing} ${styles['wing-right']}`} />
          </div>
          <div className={styles.angel}>
            <span className={styles['angel-body']} />
          </div>
          <div className={styles.mountains}>
            <span className={`${styles.mountain} ${styles.secondary}`} />
            <span className={styles.mountain} />
            <span className={`${styles.mountain} ${styles.tertiary}`} />
          </div>
          <span className={styles['glow-line']} />
        </div>
      </section>

      <footer className={styles.footer}>
        <span>Monte Sinaí · Península del Sinaí</span>
        <span>Luz del amanecer</span>
        <span>Manifestación celestial</span>
      </footer>
    </main>
  );
}
