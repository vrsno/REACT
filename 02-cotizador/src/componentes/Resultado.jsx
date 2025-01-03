export function Resultado({ cantidad, plazo, total }) {
  return (
    <div className="resultado">
      <h2>Cotizacion: </h2>
      <p>La cantidad solicitada es: $ {cantidad}</p>
      <p>A paga en: $ {plazo} meses</p>
      <p>Su pago mensual es de $ {(total / plazo).toFixed(2)}</p>
      <p>Total a pagar: $ {total.toFixed(2)}</p>
    </div>
  );
}
