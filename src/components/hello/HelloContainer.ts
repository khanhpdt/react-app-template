import { RootState } from "../../redux/state";
import { sayHello } from "../../redux/actions/helloActions";
import { connect, ConnectedProps } from "react-redux";
import HelloComponent from "./Hello";

const mapStateToProps = (state: RootState) => ({
  serverResponse: state.helloState.serverResponse,
});

const mapDispatchToProps = {
  sayHello: () => sayHello(),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(HelloComponent);
