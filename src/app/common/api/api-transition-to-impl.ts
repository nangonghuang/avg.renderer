import * as avg from "avg-engine/engine";
import { ScriptingDispatcher } from "app/common/manager/scripting-dispatcher";
import { Impl } from "app/common/api/impl";
import { TransitionLayerService } from "../../components/transition-layer/transition-layer.service";
import { APITransitionTo } from "avg-engine/engine";

export class APITransitionToImpl extends Impl {
  @Impl.registerImpl(APITransitionTo, avg.OP.TransitionTo)
  public static op_transition_to(
    scriptUnit: avg.AVGScriptUnit
  ): Promise<avg.SceneHandle> {
    const script = <avg.APITransitionTo>scriptUnit;

    return new Promise<avg.SceneHandle>((resolve, reject) => {
      TransitionLayerService.transitionTo(script.color, script.opacity, script.duration).then(() => {
        resolve();
      }, _ => { });
    });
  }
}
