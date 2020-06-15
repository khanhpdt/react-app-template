import { RootState } from "../../redux/state";
import { sayHello } from "../../redux/actions/homeActions";
import { connect, ConnectedProps } from "react-redux";
import HelloComponent from "./HomeComponent";

const mapStateToProps = (state: RootState) => ({
  serverResponse: state.homeState.serverResponse,
});

const mapDispatchToProps = {
  sayHello: () => sayHello(),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(HelloComponent);
