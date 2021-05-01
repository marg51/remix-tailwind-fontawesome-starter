import type { MetaFunction } from "remix"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVolcano } from "@fortawesome/pro-duotone-svg-icons"

export let meta: MetaFunction = () => {
    return {
        title: "Remix Starter",
        description: "Welcome to remix!",
    }
}

export default function Index() {
    return (
        <>
            <div className="mx-4 mt-4 bg-gradient-to-br rounded-t-xl p-4 leading-6 font-semibold text-white from-green-400 to-cyan-500">
                <h2>
                    Welcome to Remix!{" "}
                    <FontAwesomeIcon
                        icon={faVolcano}
                        style={{ fontSize: 30, "--fa-secondary-color": "#e15009", "--fa-secondary-opacity": 0.9 }}
                    />
                </h2>
                <p>
                    <a href="https://remix.run/dashboard/docs">Check out the docs</a> to get started.
                </p>
            </div>
            <div className="mx-4 p-4 border border-green-400">Hello</div>
        </>
    )
}
