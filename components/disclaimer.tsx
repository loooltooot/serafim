import { useState } from "react";
import CoolButton from "./coolButton";

export default function Disclaimer() {
	const [visible, setVisible] = useState(true);

	return visible ? (
		<section id="disclaimer">
			<h2>ПРЕДУПРЕЖДЕНИЕ</h2>
			<p>
				Данный Интернет-ресурс не является официальным представителем
				детского православного приюта-пансиона &quot;Серафим&quot; и был
				создан в образовательных целях по макету ООО &quot;РУВС&quot;.
				Да хранит вас Бог!
			</p>
			<button onClick={() => setVisible(false)}>ОЗНАКОМЛЕН</button>
		</section>
	) : (
		<div style={{ display: "none" }}></div>
	);
}
