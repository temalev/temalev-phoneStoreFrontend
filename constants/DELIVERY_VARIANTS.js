import { ref } from "vue";

const DELIVERY_VARIANTS = ref(
  [
    {
      name: 'Самовывоз из офиса г. Москва',
      id: 1,
      info: 'Самовывоз - бесплатно. Офис №335 (3 этаж) по адресу: улица Барклая, 8.',
    },
    {
      name: 'Самовывоз из магазина г. Рязань',
      id: 4,
      info: 'Самовывоз - бесплатно. Рязань, ул. Кольцова, дом 1',
    },
    {
      name: 'Доставка курьером по Москве внутри МКАД',
      id: 2,
      info: 'Курьерская доставка в Москве - бесплатно/490р',
    },
    {
      name: 'Транспортной компанией СДЭК в регионы',
      id: 3,
      info: 'Доставка по России - 490 рублей. Надежно упакуем и отправим в день заказа транспортной компанией «Сдэк».',
    },
  ];
  )

