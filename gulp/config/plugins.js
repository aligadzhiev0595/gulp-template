import plumber from "gulp-plumber"; //! Обработка ошибок
import notify from "gulp-notify"; //! Сообщения(подсказки)
import browsersync from "browser-sync"; //! Локальный сервер
import newer from "gulp-newer" //! Проверка обновления;
import replace from "gulp-replace"
import ifPlugin from "gulp-if"

//! Экспорт обьекта с плагинами
export const plugins = {
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
	replace:replace,
  if: ifPlugin
};
