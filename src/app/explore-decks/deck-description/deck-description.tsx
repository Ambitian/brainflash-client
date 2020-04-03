import React from 'react';
import { StarContainer } from '../../../ui/star-container/star-container';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import './deck-description.scss';

export const DeckDescription = () => {
  // TODO: Take deck data from props
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel tortor
  iaculis, faucibus nunc nec, ornare massa. Praesent dui arcu, volutpat
  vulputate lacinia ac, tincidunt non nisi. Nam tellus massa, volutpat in
  lectus a, suscipit placerat arcu. Pellentesque turpis mauris, fermentum
  vitae dui id, mollis scelerisque enim. Proin aliquam placerat semper. Ut
  ac ipsum sollicitudin, maximus metus ac, tempus mauris. Pellentesque
  eros quam, sagittis vitae metus in, sagittis pharetra ligula. Aenean
  commodo ex neque, et interdum turpis suscipit et. In imperdiet
  scelerisque mauris. Sed ultricies eleifend urna, id elementum ex pretium
  non. Nulla ornare metus a ex dapibus scelerisque. Praesent et magna et
  justo rutrum dignissim. Vivamus vitae ex sed lacus condimentum ornare id
  sed orci. Etiam luctus imperdiet eros sed porta. Vestibulum sed tempor
  nibh. Etiam in urna non metus maximus varius in in metus. Nulla id
  ultricies quam, ut efficitur mauris. Curabitur et tortor egestas,
  ultrices tortor ac, posuere nulla. Pellentesque habitant morbi tristique
  senectus et netus et malesuada fames ac turpis egestas. Nullam
  sollicitudin tortor eu felis porta, vel congue elit convallis. Nullam
  mattis purus sed semper faucibus. Suspendisse potenti. Proin a placerat
  libero, ullamcorper placerat eros. Phasellus ut condimentum enim, vitae
  luctus justo. Quisque in ultrices diam, in facilisis nisl. Maecenas
  facilisis, orci vulputate efficitur aliquam, velit arcu sodales nulla,
  sed tristique massa tortor et ex. Curabitur convallis blandit nulla
  vitae pretium. Nam tincidunt, ipsum ut faucibus sollicitudin, libero
  urna porta massa, ut molestie elit enim nec nulla. Donec vulputate nisl
  sed est auctor placerat. Nullam commodo laoreet mauris, a efficitur erat
  ullamcorper eu. Etiam a nisl rhoncus, tristique arcu et, pretium dui.
  Pellentesque condimentum venenatis metus, ut rutrum nunc ultrices quis.
  Donec vitae massa eu sem blandit ultricies. Curabitur eu tellus a eros
  tempor fringilla. Nullam vitae elit vitae felis pulvinar commodo.
  Maecenas varius justo id purus ullamcorper, eget vestibulum elit varius.
  Orci varius natoque penatibus et magnis dis parturient montes, nascetur
  ridiculus mus. Vestibulum posuere lobortis eros, sed vestibulum libero
  ultricies et. Nunc vel nulla dui. Sed pretium lorem lacus, at hendrerit
  metus suscipit at. Proin commodo ultrices sollicitudin. Integer commodo
  ante auctor nulla facilisis sagittis. Sed condimentum ante id ex
  consequat porta. Proin vehicula est facilisis mi semper pharetra. Duis
  ac faucibus erat, ac tincidunt ex. Phasellus a eleifend ipsum. Aenean
  tincidunt lacinia lacus ut varius. Vivamus viverra, quam quis feugiat
  feugiat, turpis lorem ornare massa, non cursus dolor ex ut erat. Proin
  hendrerit lorem vel arcu vestibulum venenatis. In hac habitasse platea
  dictumst. Cras tempor porta lacus sed elementum. Pellentesque dolor
  ipsum, venenatis ut mauris ac, ullamcorper sollicitudin metus. Maecenas
  aliquam facilisis felis, a semper elit pretium vel. Curabitur a sagittis
  neque. Aenean eu dui eu nisi ullamcorper euismod et vel augue. Praesent
  congue ante vel dolor laoreet, id aliquet quam dapibus. Suspendisse eget
  risus euismod, cursus augue sed, feugiat leo.`.split(' ');

  return (
    <div className="deck-description-container">
      <div
        className="deck-img"
        style={{
          backgroundImage: 'url(https://i.picsum.photos/id/667/1920/1080.jpg)',
        }}
      ></div>
      <div className="rating-container">
        <StarContainer activeStarCount={4} />
        <div className="rating-summary">4.0</div>
        <div className="rating-count">9321 ratings</div>
      </div>

      <h2 className="deck-title">
        Fundamentals of object oriented programming
      </h2>

      <div className="deck-description">
        {text.slice(0, 50).join(' ').trimEnd()}
        {text.length > 101 ? '...' : ''}
      </div>
      <Link className="deck-details-link" to="">
        View Details!
      </Link>
      <div className="deck-action-buttons">
        <Button className="action-btn" icon="fire" type="primary">
          Enroll now!
        </Button>
        <Button className="action-btn" icon="calendar">
          Schedule for later
        </Button>
      </div>
    </div>
  );
};
