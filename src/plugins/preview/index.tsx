import { Connect } from "dynamic-react"
import * as React from "react"
import { Props, State } from "./index.type"
import * as Styled from "./style"

@Connect
class Preview extends React.Component<Props, State> {
    public static defaultProps = new Props()
    public state = new State()

    public render() {
        return (
            <Styled.Container onClick={this.handleClick}>
                {this.props.stores.ApplicationStore.isPreview ? "取消" : "预览"}
            </Styled.Container>
        )
    }

    private handleClick = () => {
        this.props.actions.ApplicationAction.setPreview(!this.props.stores.ApplicationStore.isPreview)
    }
}

export default {
    position: "navbarRight",
    class: Preview
}
