import app from 'flarum/admin/app';
import { extend } from 'flarum/common/extend';
import AdminNav from "flarum/admin/components/AdminNav";
import LinkButton from "flarum/common/components/LinkButton";
import CardConfirmationPage from "./components/CardConfirmationPage";

app.initializers.add('lawaxi-statistics', () => {

  app.extensionData.for('lawaxi-statistics').registerPage(CardConfirmationPage);


  app.routes["card_confirmation"] = {
    path: "/card_confirmation",
    component: CardConfirmationPage,
  };

  extend(AdminNav.prototype, 'items', function (items) {
    items.add(
      'card_confirmation',
      <LinkButton href={app.route('card_confirmation')} icon="fas fa-users" title={app.translator.trans('core.admin.nav.userlist_title')}>
        {app.translator.trans('core.admin.nav.userlist_button')}
      </LinkButton>,
      40
    );
  });
});
