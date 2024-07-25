import { Map } from 'immutable';
import React, { useRef, useEffect, Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Modifier, EditorState, genKey } from 'draft-js';
import escapeRegExp from 'lodash-es/escapeRegExp';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true,
    },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === 'object' || typeof call === 'function')) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}

function MentionLink(_ref) {
  var mention = _ref.mention,
    children = _ref.children,
    className = _ref.className;
  return /*#__PURE__*/ React.createElement(
    'a',
    {
      href: mention.link,
      className: className,
      spellCheck: false,
      'data-testid': 'mentionLink',
    },
    children
  );
}

function MentionText(_ref2) {
  var children = _ref2.children,
    className = _ref2.className;
  return /*#__PURE__*/ React.createElement(
    'span',
    {
      className: className,
      spellCheck: false,
      'data-testid': 'mentionText',
    },
    children
  );
}

function Mention(props) {
  var entityKey = props.entityKey,
    _props$theme = props.theme,
    theme = _props$theme === void 0 ? {} : _props$theme,
    mentionComponent = props.mentionComponent,
    children = props.children,
    decoratedText = props.decoratedText,
    className = props.className,
    contentState = props.contentState;
  var combinedClassName = clsx(theme.mention, className);
  var mention = contentState.getEntity(entityKey).getData().mention;
  var Component =
    mentionComponent || (mention.link ? MentionLink : MentionText);
  return /*#__PURE__*/ React.createElement(
    Component,
    {
      entityKey: entityKey,
      mention: mention,
      theme: theme,
      className: combinedClassName,
      decoratedText: decoratedText,
    },
    children
  );
}

var Entry = function Entry(props) {
  var mouseDown = useRef(false);
  useEffect(function () {
    mouseDown.current = false;
  });

  var onMouseUp = function onMouseUp() {
    if (mouseDown.current) {
      props.onMentionSelect(props.mention);
      mouseDown.current = false;
    }
  };

  var onMouseDown = function onMouseDown(event) {
    // Note: important to avoid a content edit change
    event.preventDefault();
    mouseDown.current = true;
  };

  var onMouseEnter = function onMouseEnter() {
    props.onMentionFocus(props.index);
  };

  var _props$theme = props.theme,
    theme = _props$theme === void 0 ? {} : _props$theme,
    mention = props.mention,
    searchValue = props.searchValue,
    isFocused = props.isFocused,
    id = props.id;
  var className = isFocused
    ? theme.mentionSuggestionsEntryFocused
    : theme.mentionSuggestionsEntry;
  var EntryComponent = props.entryComponent;
  return /*#__PURE__*/ React.createElement(EntryComponent, {
    className: className,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    onMouseEnter: onMouseEnter,
    role: 'option',
    id: id,
    'aria-selected': isFocused ? 'true' : null,
    theme: theme,
    mention: mention,
    isFocused: isFocused,
    searchValue: searchValue,
  });
};

Entry.propTypes = {
  entryComponent: PropTypes.any.isRequired,
  searchValue: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  onMentionSelect: PropTypes.func,
};

/**
 * Return tail end of the string matching trigger upto the position.
 */
function getSearchTextAt(blockText, position, trigger) {
  var str = blockText.substr(0, position);
  var begin = trigger.length === 0 ? 0 : str.lastIndexOf(trigger);
  var matchingString =
    trigger.length === 0 ? str : str.slice(begin + trigger.length);
  var end = str.length;
  return {
    begin: begin,
    end: end,
    matchingString: matchingString,
  };
}

var getSearchText = function (editorState, selection, trigger) {
  var anchorKey = selection.getAnchorKey();
  var anchorOffset = selection.getAnchorOffset();
  var currentContent = editorState.getCurrentContent();
  var currentBlock = currentContent.getBlockForKey(anchorKey);
  var blockText = currentBlock.getText();
  return getSearchTextAt(blockText, anchorOffset, trigger);
};

function getTypeByTrigger(trigger) {
  return trigger === '@' ? 'mention' : ''.concat(trigger, 'mention');
}

function addMention(
  editorState,
  mention,
  mentionPrefix,
  mentionTrigger,
  entityMutability
) {
  var contentStateWithEntity = editorState
    .getCurrentContent()
    .createEntity(getTypeByTrigger(mentionTrigger), entityMutability, {
      mention: mention,
    });
  var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  var currentSelectionState = editorState.getSelection();

  var _getSearchText = getSearchText(
      editorState,
      currentSelectionState,
      mentionTrigger
    ),
    begin = _getSearchText.begin,
    end = _getSearchText.end; // get selection of the @mention search text

  var mentionTextSelection = currentSelectionState.merge({
    anchorOffset: begin,
    focusOffset: end,
  });
  var mentionReplacedContent = Modifier.replaceText(
    editorState.getCurrentContent(),
    mentionTextSelection,
    ''.concat(mentionPrefix).concat(mention.name),
    undefined, // no inline style needed
    entityKey
  ); // If the mention is inserted at the end, a space is appended right after for
  // a smooth writing experience.

  var blockKey = mentionTextSelection.getAnchorKey();
  var blockSize = editorState
    .getCurrentContent()
    .getBlockForKey(blockKey)
    .getLength();

  if (blockSize === end) {
    mentionReplacedContent = Modifier.insertText(
      mentionReplacedContent,
      mentionReplacedContent.getSelectionAfter(),
      ''
    );
  }

  var newEditorState = EditorState.push(
    editorState,
    mentionReplacedContent,
    'insert-fragment'
  );
  return EditorState.forceSelection(
    newEditorState,
    mentionReplacedContent.getSelectionAfter()
  );
}

var decodeOffsetKey = function decodeOffsetKey(offsetKey) {
  var _offsetKey$split = offsetKey.split('-'),
    _offsetKey$split2 = _slicedToArray(_offsetKey$split, 3),
    blockKey = _offsetKey$split2[0],
    decoratorKey = _offsetKey$split2[1],
    leafKey = _offsetKey$split2[2];

  return {
    blockKey: blockKey,
    decoratorKey: parseInt(decoratorKey, 10),
    leafKey: parseInt(leafKey, 10),
  };
};

function Avatar(_ref) {
  var mention = _ref.mention,
    _ref$theme = _ref.theme,
    theme = _ref$theme === void 0 ? {} : _ref$theme;

  if (mention.avatar) {
    return /*#__PURE__*/ React.createElement('img', {
      src: mention.avatar,
      className: theme.mentionSuggestionsEntryAvatar,
      role: 'presentation',
    });
  }

  return null;
}

function DefaultEntryComponent(props) {
  var mention = props.mention,
    theme = props.theme,
    isFocused = props.isFocused,
    searchValue = props.searchValue,
    parentProps = _objectWithoutProperties(props, [
      'mention',
      'theme',
      'isFocused',
      'searchValue',
    ]);

  return /*#__PURE__*/ React.createElement(
    'div',
    parentProps,
    /*#__PURE__*/ React.createElement(Avatar, {
      mention: mention,
      theme: theme,
    }),
    /*#__PURE__*/ React.createElement(
      'span',
      {
        className:
          theme === null || theme === void 0
            ? void 0
            : theme.mentionSuggestionsEntryText,
      },
      mention.name
    )
  );
}

var MentionSuggestions = /*#__PURE__*/ (function (_Component) {
  _inherits(MentionSuggestions, _Component);

  var _super = _createSuper(MentionSuggestions);

  function MentionSuggestions(props) {
    var _this;

    _classCallCheck(this, MentionSuggestions);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), 'state', {
      focusedOptionIndex: 0,
    });

    _defineProperty(_assertThisInitialized(_this), 'key', genKey());

    _defineProperty(_assertThisInitialized(_this), 'popover', void 0);

    _defineProperty(_assertThisInitialized(_this), 'activeOffsetKey', void 0);

    _defineProperty(_assertThisInitialized(_this), 'lastSearchValue', void 0);

    _defineProperty(
      _assertThisInitialized(_this),
      'lastSelectionIsInsideWord',
      void 0
    );

    _defineProperty(
      _assertThisInitialized(_this),
      'onEditorStateChange',
      function (editorState) {
        var searches = _this.props.store.getAllSearches(); // if no search portal is active there is no need to show the popover

        if (searches.size === 0) {
          return editorState;
        }

        var removeList = function removeList() {
          _this.props.store.resetEscapedSearch();

          _this.closeDropdown();

          return editorState;
        }; // get the current selection

        var selection = editorState.getSelection();
        var anchorKey = selection.getAnchorKey();
        var anchorOffset = selection.getAnchorOffset(); // the list should not be visible if a range is selected or the editor has no focus

        if (!selection.isCollapsed() || !selection.getHasFocus())
          return removeList(); // identify the start & end positon of each search-text

        var offsetDetails = searches.map(function (offsetKey) {
          return decodeOffsetKey(offsetKey);
        }); // a leave can be empty when it is removed due event.g. using backspace
        // do not check leaves, use full decorated portal text

        var leaves = offsetDetails
          .filter(function (offsetDetail) {
            return offsetDetail.blockKey === anchorKey;
          })
          .map(function (offsetDetail) {
            return editorState
              .getBlockTree(offsetDetail.blockKey)
              .getIn([offsetDetail.decoratorKey]);
          }); // if all leaves are undefined the popover should be removed

        if (
          leaves.every(function (leave) {
            return leave === undefined;
          })
        ) {
          return removeList();
        } // Checks that the cursor is after the @ character but still somewhere in
        // the word (search term). Setting it to allow the cursor to be left of
        // the @ causes troubles due selection confusion.

        var plainText = editorState.getCurrentContent().getPlainText();
        var selectionIsInsideWord = leaves
          .filter(function (leave) {
            return leave !== undefined;
          })
          .map(
            function (_ref) {
              var start = _ref.start,
                end = _ref.end;
              return (
                (start === 0 &&
                  anchorOffset === _this.props.mentionTrigger.length &&
                  plainText.charAt(anchorOffset) !==
                    _this.props.mentionTrigger &&
                  new RegExp( // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore raw is readonly
                    String.raw({
                      raw: ''.concat(escapeRegExp(_this.props.mentionTrigger)),
                    }),
                    'g'
                  ).test(plainText) &&
                  anchorOffset <= end) || // @ is the first character
                (anchorOffset >= start + _this.props.mentionTrigger.length &&
                  anchorOffset <= end)
              );
            } // @ is in the text or at the end
          );
        if (
          selectionIsInsideWord.every(function (isInside) {
            return isInside === false;
          })
        )
          return removeList();
        var lastActiveOffsetKey = _this.activeOffsetKey;
        _this.activeOffsetKey = selectionIsInsideWord
          .filter(function (value) {
            return value === true;
          })
          .keySeq()
          .first();

        _this.onSearchChange(
          editorState,
          selection,
          _this.activeOffsetKey,
          lastActiveOffsetKey
        ); // make sure the escaped search is reseted in the cursor since the user
        // already switched to another mention search

        if (!_this.props.store.isEscaped(_this.activeOffsetKey)) {
          _this.props.store.resetEscapedSearch();
        } // If none of the above triggered to close the window, it's safe to assume
        // the dropdown should be open. This is useful when a user focuses on another
        // input field and then comes back: the dropdown will show again.

        if (
          !_this.props.open &&
          !_this.props.store.isEscaped(_this.activeOffsetKey) &&
          _this.props.suggestions.length > 0
        ) {
          _this.openDropdown();
        } // makes sure the focused index is reseted every time a new selection opens
        // or the selection was moved to another mention search

        if (
          _this.lastSelectionIsInsideWord === undefined ||
          !selectionIsInsideWord.equals(_this.lastSelectionIsInsideWord)
        ) {
          _this.setState({
            focusedOptionIndex: 0,
          });
        }

        _this.lastSelectionIsInsideWord = selectionIsInsideWord;
        return editorState;
      }
    );

    _defineProperty(_assertThisInitialized(_this), 'onSearchChange', function (
      editorState,
      selection,
      activeOffsetKey,
      lastActiveOffsetKey
    ) {
      var _getSearchText = getSearchText(
          editorState,
          selection,
          _this.props.mentionTrigger
        ),
        searchValue = _getSearchText.matchingString;

      if (
        _this.lastSearchValue !== searchValue ||
        activeOffsetKey !== lastActiveOffsetKey
      ) {
        _this.lastSearchValue = searchValue;

        _this.props.onSearchChange({
          value: searchValue,
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), 'onDownArrow', function (
      keyboardEvent
    ) {
      keyboardEvent.preventDefault();
      var newIndex = _this.state.focusedOptionIndex + 1;

      _this.onMentionFocus(
        newIndex >= _this.props.suggestions.length ? 0 : newIndex
      );
    });

    _defineProperty(_assertThisInitialized(_this), 'onTab', function (
      keyboardEvent
    ) {
      keyboardEvent.preventDefault();

      _this.commitSelection();
    });

    _defineProperty(_assertThisInitialized(_this), 'onUpArrow', function (
      keyboardEvent
    ) {
      keyboardEvent.preventDefault();

      if (_this.props.suggestions.length > 0) {
        var newIndex = _this.state.focusedOptionIndex - 1;

        _this.onMentionFocus(
          newIndex < 0 ? _this.props.suggestions.length - 1 : newIndex
        );
      }
    });

    _defineProperty(_assertThisInitialized(_this), 'onEscape', function (
      keyboardEvent
    ) {
      keyboardEvent.preventDefault();

      var activeOffsetKey = _this.lastSelectionIsInsideWord
        .filter(function (value) {
          return value === true;
        })
        .keySeq()
        .first();

      _this.props.store.escapeSearch(activeOffsetKey);

      _this.closeDropdown(); // to force a re-render of the outer component to change the aria props

      _this.props.store.setEditorState(_this.props.store.getEditorState());
    });

    _defineProperty(_assertThisInitialized(_this), 'onMentionSelect', function (
      mention
    ) {
      // Note: This can happen in case a user typed @xxx (invalid mention) and
      // then hit Enter. Then the mention will be undefined.
      if (!mention) {
        return;
      }

      if (_this.props.onAddMention) {
        _this.props.onAddMention(mention);
      }

      _this.closeDropdown();

      var newEditorState = addMention(
        _this.props.store.getEditorState(),
        mention,
        _this.props.mentionPrefix,
        _this.props.mentionTrigger,
        _this.props.entityMutability
      );

      _this.props.store.setEditorState(newEditorState);
    });

    _defineProperty(_assertThisInitialized(_this), 'onMentionFocus', function (
      index
    ) {
      var descendant = 'mention-option-'.concat(_this.key, '-').concat(index);
      _this.props.ariaProps.ariaActiveDescendantID = descendant;

      _this.setState({
        focusedOptionIndex: index,
      }); // to force a re-render of the outer component to change the aria props

      _this.props.store.setEditorState(_this.props.store.getEditorState());
    });

    _defineProperty(
      _assertThisInitialized(_this),
      'commitSelection',
      function () {
        if (!_this.props.store.getIsOpened()) {
          return 'not-handled';
        }

        _this.onMentionSelect(
          _this.props.suggestions[_this.state.focusedOptionIndex]
        );

        return 'handled';
      }
    );

    _defineProperty(_assertThisInitialized(_this), 'openDropdown', function () {
      // This is a really nasty way of attaching & releasing the key related functions.
      // It assumes that the keyFunctions object will not loose its reference and
      // by this we can replace inner parameters spread over different modules.
      // This better be some registering & unregistering logic. PRs are welcome :)
      _this.props.callbacks.handleReturn = _this.commitSelection;

      _this.props.callbacks.keyBindingFn = function (keyboardEvent) {
        // arrow down
        if (keyboardEvent.keyCode === 40) {
          _this.onDownArrow(keyboardEvent);
        } // arrow up

        if (keyboardEvent.keyCode === 38) {
          _this.onUpArrow(keyboardEvent);
        } // escape

        if (keyboardEvent.keyCode === 27) {
          _this.onEscape(keyboardEvent);
        } // tab

        if (keyboardEvent.keyCode === 9) {
          _this.onTab(keyboardEvent);
        }

        return null;
      };

      var descendant = 'mention-option-'
        .concat(_this.key, '-')
        .concat(_this.state.focusedOptionIndex);
      _this.props.ariaProps.ariaActiveDescendantID = descendant;
      _this.props.ariaProps.ariaOwneeID = 'mentions-list-'.concat(_this.key);
      _this.props.ariaProps.ariaHasPopup = 'true';
      _this.props.ariaProps.ariaExpanded = true;

      _this.props.onOpenChange(true);
    });

    _defineProperty(
      _assertThisInitialized(_this),
      'closeDropdown',
      function () {
        // make sure none of these callbacks are triggered
        _this.props.callbacks.handleReturn = undefined;
        _this.props.callbacks.keyBindingFn = undefined;
        _this.props.ariaProps.ariaHasPopup = 'false';
        _this.props.ariaProps.ariaExpanded = false;
        _this.props.ariaProps.ariaActiveDescendantID = undefined;
        _this.props.ariaProps.ariaOwneeID = undefined;

        _this.props.onOpenChange(false);
      }
    );

    _this.props.callbacks.onChange = _this.onEditorStateChange;
    return _this;
  }

  _createClass(MentionSuggestions, [
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        if (this.popover) {
          // In case the list shrinks there should be still an option focused.
          // Note: this might run multiple times and deduct 1 until the condition is
          // not fullfilled anymore.
          var size = this.props.suggestions.length;

          if (size > 0 && this.state.focusedOptionIndex >= size) {
            this.setState({
              focusedOptionIndex: size - 1,
            });
          } // Note: this is a simple protection for the error when componentDidUpdate
          // try to get new getPortalClientRect, but the key already was deleted by
          // previous action. (right now, it only can happened when set the mention
          // trigger to be multi-characters which not supported anyway!)

          if (!this.props.store.getAllSearches().has(this.activeOffsetKey)) {
            return;
          }

          var decoratorRect = this.props.store.getPortalClientRect(
            this.activeOffsetKey
          );
          var newStyles = this.props.positionSuggestions({
            decoratorRect: decoratorRect,
            props: this.props,
            popover: this.popover,
          });

          for (
            var _i = 0, _Object$entries = Object.entries(newStyles);
            _i < _Object$entries.length;
            _i++
          ) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.popover.style[key] = value;
          }
        }
      },
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.props.callbacks.onChange = undefined;
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        if (!this.props.open) {
          return null;
        }

        var _this$props = this.props,
          entryComponent = _this$props.entryComponent,
          _this$props$popoverCo = _this$props.popoverComponent,
          popoverComponent =
            _this$props$popoverCo === void 0
              ? /*#__PURE__*/ React.createElement('div', null)
              : _this$props$popoverCo,
          onOpenChange = _this$props.onOpenChange,
          onAddMention = _this$props.onAddMention,
          onSearchChange = _this$props.onSearchChange,
          suggestions = _this$props.suggestions,
          ariaProps = _this$props.ariaProps,
          callbacks = _this$props.callbacks,
          _this$props$theme = _this$props.theme,
          theme = _this$props$theme === void 0 ? {} : _this$props$theme,
          store = _this$props.store,
          entityMutability = _this$props.entityMutability,
          positionSuggestions = _this$props.positionSuggestions,
          mentionTrigger = _this$props.mentionTrigger,
          mentionPrefix = _this$props.mentionPrefix,
          elementProps = _objectWithoutProperties(_this$props, [
            'entryComponent',
            'popoverComponent',
            'onOpenChange',
            'onAddMention',
            'onSearchChange',
            'suggestions',
            'ariaProps',
            'callbacks',
            'theme',
            'store',
            'entityMutability',
            'positionSuggestions',
            'mentionTrigger',
            'mentionPrefix',
          ]);

        return /*#__PURE__*/ React.cloneElement(
          popoverComponent,
          _objectSpread2(
            _objectSpread2({}, elementProps),
            {},
            {
              className: theme.mentionSuggestions,
              role: 'listbox',
              id: 'mentions-list-'.concat(this.key),
              ref: function ref(element) {
                _this2.popover = element;
              },
            }
          ),
          this.props.suggestions.map(function (mention, index) {
            return /*#__PURE__*/ React.createElement(Entry, {
              key: mention.id != null ? mention.id : mention.name,
              onMentionSelect: _this2.onMentionSelect,
              onMentionFocus: _this2.onMentionFocus,
              isFocused: _this2.state.focusedOptionIndex === index,
              mention: mention,
              index: index,
              id: 'mention-option-'.concat(_this2.key, '-').concat(index),
              theme: theme,
              searchValue: _this2.lastSearchValue,
              entryComponent: entryComponent || DefaultEntryComponent,
            });
          })
        );
      },
    },
  ]);

  return MentionSuggestions;
})(Component);

_defineProperty(MentionSuggestions, 'propTypes', {
  open: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
  entityMutability: PropTypes.oneOf(['SEGMENTED', 'IMMUTABLE', 'MUTABLE']),
  entryComponent: PropTypes.func,
  onAddMention: PropTypes.func,
  suggestions: PropTypes.array.isRequired,
});

function MentionSuggestionsPortal(props) {
  var searchPortal = useRef(); // Note: this is a workaround for an obscure issue: https://github.com/draft-js-plugins/draft-js-plugins/pull/667/files
  // Ideally we can remove this in the future.

  var searchPortalRef = function searchPortalRef(element) {
    searchPortal.current = element;
  };

  var updatePortalClientRect = function updatePortalClientRect(currentProps) {
    currentProps.store.updatePortalClientRect(
      currentProps.offsetKey,
      function () {
        return searchPortal.current.getBoundingClientRect();
      }
    );
  }; // When inputting Japanese characters (or any complex alphabet which requires
  // hitting enter to commit the characters), that action was causing a race
  // condition when we used UNSAFE_componentWillMount. By using componentDidMount
  // instead of UNSAFE_componentWillMount, the component will unmount unregister and
  // then properly mount and register after. Prior to this change,
  // UNSAFE_componentWillMount would not fire after componentWillUnmount even though it
  // was still in the DOM, so it wasn't re-registering the offsetkey.

  useEffect(function () {
    props.store.register(props.offsetKey);
    props.store.setIsOpened(true);
    updatePortalClientRect(props); // trigger a re-render so the MentionSuggestions becomes active

    props.setEditorState(props.getEditorState());
    return function () {
      props.store.unregister(props.offsetKey);
      props.store.setIsOpened(false);
    };
  }, []);
  useEffect(function () {
    updatePortalClientRect(props);
  });
  return /*#__PURE__*/ React.createElement(
    'span',
    {
      ref: searchPortalRef,
    },
    props.children
  );
}

var getRelativeParent = function getRelativeParent(element) {
  if (!element) {
    return null;
  }

  var position = window.getComputedStyle(element).getPropertyValue('position');

  if (position !== 'static') {
    return element;
  }

  return getRelativeParent(element.parentElement);
};

function positionSuggestions(_ref) {
  var decoratorRect = _ref.decoratorRect,
    popover = _ref.popover,
    props = _ref.props;
  var relativeParent = getRelativeParent(popover.parentElement);
  var relativeRect;

  if (relativeParent) {
    var relativeParentRect = relativeParent.getBoundingClientRect();
    relativeRect = {
      scrollLeft: relativeParent.scrollLeft,
      scrollTop: relativeParent.scrollTop,
      left: decoratorRect.left - relativeParentRect.left,
      top: decoratorRect.bottom - relativeParentRect.top,
    };
  } else {
    relativeRect = {
      scrollTop: window.pageYOffset || document.documentElement.scrollTop,
      scrollLeft: window.pageXOffset || document.documentElement.scrollLeft,
      top: decoratorRect.bottom,
      left: decoratorRect.left,
    };
  }

  var left = relativeRect.left + relativeRect.scrollLeft;
  var top = relativeRect.top + relativeRect.scrollTop;
  var transform;
  var transition;

  if (props.open) {
    if (props.suggestions.length > 0) {
      transform = 'scale(1)';
      transition = 'all 0.25s cubic-bezier(.3,1.2,.2,1)';
    } else {
      transform = 'scale(0)';
      transition = 'all 0.35s cubic-bezier(.3,1,.2,1)';
    }
  }

  return {
    left: ''.concat(left, 'px'),
    top: ''.concat(top, 'px'),
    transform: transform,
    transformOrigin: '1em 0%',
    transition: transition,
  };
}

var defaultRegExp =
  '[' +
  '\\w-' + // Latin-1 Supplement (letters only) - https://en.wikipedia.org/wiki/List_of_Unicode_characters#Latin-1_Supplement
  '\xC0-\xD6' +
  '\xD8-\xF6' +
  '\xF8-\xFF' + // Latin Extended-A (without deprecated character) - https://en.wikipedia.org/wiki/List_of_Unicode_characters#Latin_Extended-A
  '\u0100-\u0148' +
  '\u014A-\u017F' + // Cyrillic symbols: \u0410-\u044F - https://en.wikipedia.org/wiki/Cyrillic_script_in_Unicode
  '\u0410-\u044F' + // hiragana (japanese): \u3040-\u309F - https://gist.github.com/ryanmcgrath/982242#file-japaneseregex-js
  '\u3040-\u309F' + // katakana (japanese): \u30A0-\u30FF - https://gist.github.com/ryanmcgrath/982242#file-japaneseregex-js
  '\u30A0-\u30FF' + // For an advanced explaination about Hangul see https://github.com/draft-js-plugins/draft-js-plugins/pull/480#issuecomment-254055437
  // Hangul Jamo (korean): \u3130-\u318F - https://en.wikipedia.org/wiki/Korean_language_and_computers#Hangul_in_Unicode
  // Hangul Syllables (korean): \uAC00-\uD7A3 - https://en.wikipedia.org/wiki/Korean_language_and_computers#Hangul_in_Unicode
  '\u3130-\u318F' +
  '\uAC00-\uD7A3' + // common chinese symbols: \u4e00-\u9eff - http://stackoverflow.com/a/1366113/837709
  '\u4E00-\u9EFF' + // Arabic https://en.wikipedia.org/wiki/Arabic_(Unicode_block)
  '\u0600-\u06FF' + // Vietnamese http://vietunicode.sourceforge.net/charset/
  '\xC0-\u1EF9' +
  ']*';

var defaultTheme = {
  mention: 'm194djbp',
  // CSS class for suggestions component
  mentionSuggestions: 'm5lcqdx',
  // CSS classes for an entry in the suggestions component
  mentionSuggestionsEntry: 'mundl6p',
  mentionSuggestionsEntryFocused: 'm1wjk07u',
  mentionSuggestionsEntryText: 'm1lhzo47',
  mentionSuggestionsEntryAvatar: 'm1qprr21',
};

var findMentionEntities = function findMentionEntities(trigger) {
  return function (contentBlock, callback, contentState) {
    contentBlock.findEntityRanges(function (character) {
      var entityKey = character.getEntity();
      return (
        entityKey !== null &&
        contentState.getEntity(entityKey).getType() ===
          getTypeByTrigger(trigger)
      );
    }, callback);
  };
};

var findWithRegex = function findWithRegex(regex, contentBlock, callback) {
  var contentBlockText = contentBlock.getText(); // exclude entities, when matching

  contentBlock.findEntityRanges(
    function (character) {
      return !character.getEntity();
    },
    function (nonEntityStart, nonEntityEnd) {
      var text = contentBlockText.slice(nonEntityStart, nonEntityEnd);
      var matchArr;
      var start;
      var prevLastIndex = regex.lastIndex; // Go through all matches in the text and return the indices to the callback
      // Break the loop if lastIndex is not changed

      while ((matchArr = regex.exec(text)) !== null) {
        // eslint-disable-line
        if (regex.lastIndex === prevLastIndex) {
          break;
        }

        prevLastIndex = regex.lastIndex;
        start = nonEntityStart + matchArr.index;
        callback(start, start + matchArr[0].length);
      }
    }
  );
};

var mentionSuggestionsStrategy = function (trigger, supportWhiteSpace, regExp) {
  //eslint-disable-line
  var MENTION_REGEX = supportWhiteSpace
    ? new RegExp(
        ''.concat(escapeRegExp(trigger), '(').concat(regExp, '|\\s){0,}'),
        'g'
      )
    : new RegExp('(\\s|^)'.concat(escapeRegExp(trigger)).concat(regExp), 'g');
  return function (contentBlock, callback) {
    findWithRegex(MENTION_REGEX, contentBlock, callback);
  };
};

// Get the first 5 suggestions that match
var defaultSuggestionsFilter = function defaultSuggestionsFilter(
  searchValue,
  suggestions
) {
  var value = searchValue.toLowerCase();
  var filteredSuggestions = suggestions.filter(function (suggestion) {
    return !value || suggestion.name.toLowerCase().indexOf(value) > -1;
  });
  var length = filteredSuggestions.length < 5 ? filteredSuggestions.length : 5;
  return filteredSuggestions.slice(0, length);
};

var index = function () {
  var config =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var callbacks = {
    keyBindingFn: undefined,
    handleKeyCommand: undefined,
    handleReturn: undefined,
    onChange: undefined,
  };
  var ariaProps = {
    ariaHasPopup: 'false',
    ariaExpanded: false,
    ariaOwneeID: undefined,
    ariaActiveDescendantID: undefined,
  };
  var searches = Map();
  var escapedSearch;
  var clientRectFunctions = Map();
  var isOpened = false;
  var store = {
    getEditorState: undefined,
    setEditorState: undefined,
    getPortalClientRect: function getPortalClientRect(offsetKey) {
      return clientRectFunctions.get(offsetKey)();
    },
    getAllSearches: function getAllSearches() {
      return searches;
    },
    isEscaped: function isEscaped(offsetKey) {
      return escapedSearch === offsetKey;
    },
    escapeSearch: function escapeSearch(offsetKey) {
      escapedSearch = offsetKey;
    },
    resetEscapedSearch: function resetEscapedSearch() {
      escapedSearch = undefined;
    },
    register: function register(offsetKey) {
      searches = searches.set(offsetKey, offsetKey);
    },
    updatePortalClientRect: function updatePortalClientRect(offsetKey, func) {
      clientRectFunctions = clientRectFunctions.set(offsetKey, func);
    },
    unregister: function unregister(offsetKey) {
      searches = searches['delete'](offsetKey);
      clientRectFunctions = clientRectFunctions['delete'](offsetKey);
    },
    getIsOpened: function getIsOpened() {
      return isOpened;
    },
    setIsOpened: function setIsOpened(nextIsOpened) {
      isOpened = nextIsOpened;
    },
  }; // Styles are overwritten instead of merged as merging causes a lot of confusion.
  //
  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.

  var _config$mentionPrefix = config.mentionPrefix,
    mentionPrefix =
      _config$mentionPrefix === void 0 ? '' : _config$mentionPrefix,
    _config$theme = config.theme,
    theme = _config$theme === void 0 ? defaultTheme : _config$theme,
    _config$positionSugge = config.positionSuggestions,
    positionSuggestions$1 =
      _config$positionSugge === void 0
        ? positionSuggestions
        : _config$positionSugge,
    mentionComponent = config.mentionComponent,
    _config$mentionSugges = config.mentionSuggestionsComponent,
    MentionSuggestionsComponent =
      _config$mentionSugges === void 0
        ? MentionSuggestions
        : _config$mentionSugges,
    _config$entityMutabil = config.entityMutability,
    entityMutability =
      _config$entityMutabil === void 0 ? 'SEGMENTED' : _config$entityMutabil,
    _config$mentionTrigge = config.mentionTrigger,
    mentionTrigger =
      _config$mentionTrigge === void 0 ? '@' : _config$mentionTrigge,
    _config$mentionRegExp = config.mentionRegExp,
    mentionRegExp =
      _config$mentionRegExp === void 0 ? defaultRegExp : _config$mentionRegExp,
    _config$supportWhites = config.supportWhitespace,
    supportWhitespace =
      _config$supportWhites === void 0 ? false : _config$supportWhites,
    entryComponent = config.entryComponent;
  var mentionSearchProps = {
    ariaProps: ariaProps,
    callbacks: callbacks,
    theme: theme,
    store: store,
    entityMutability: entityMutability,
    positionSuggestions: positionSuggestions$1,
    mentionTrigger: mentionTrigger,
    mentionPrefix: mentionPrefix,
    entryComponent: entryComponent,
  };

  var DecoratedMentionSuggestionsComponent = function DecoratedMentionSuggestionsComponent(
    props
  ) {
    return /*#__PURE__*/ React.createElement(
      MentionSuggestionsComponent,
      _extends({}, props, mentionSearchProps)
    );
  };

  var DecoratedMention = function DecoratedMention(props) {
    return /*#__PURE__*/ React.createElement(
      Mention,
      _extends({}, props, {
        theme: theme,
        mentionComponent: mentionComponent,
      })
    );
  };

  var DecoratedMentionSuggestionsPortal = function DecoratedMentionSuggestionsPortal(
    props
  ) {
    return /*#__PURE__*/ React.createElement(
      MentionSuggestionsPortal,
      _extends({}, props, {
        store: store,
      })
    );
  };

  return {
    MentionSuggestions: DecoratedMentionSuggestionsComponent,
    decorators: [
      {
        strategy: findMentionEntities(mentionTrigger),
        component: DecoratedMention,
      },
      {
        strategy: mentionSuggestionsStrategy(
          mentionTrigger,
          supportWhitespace,
          mentionRegExp
        ),
        component: DecoratedMentionSuggestionsPortal,
      },
    ],
    getAccessibilityProps: function getAccessibilityProps() {
      return {
        role: 'combobox',
        ariaAutoComplete: 'list',
        ariaHasPopup: ariaProps.ariaHasPopup,
        ariaExpanded: ariaProps.ariaExpanded,
        ariaActiveDescendantID: ariaProps.ariaActiveDescendantID,
        ariaOwneeID: ariaProps.ariaOwneeID,
      };
    },
    initialize: function initialize(_ref) {
      var getEditorState = _ref.getEditorState,
        setEditorState = _ref.setEditorState;
      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
    },
    keyBindingFn: function keyBindingFn(keyboardEvent) {
      return (
        (callbacks.keyBindingFn && callbacks.keyBindingFn(keyboardEvent)) ||
        null
      );
    },
    handleReturn: function handleReturn(keyboardEvent) {
      return callbacks.handleReturn && callbacks.handleReturn(keyboardEvent);
    },
    onChange: function onChange(editorState) {
      if (callbacks.onChange) {
        return callbacks.onChange(editorState);
      }

      return editorState;
    },
  };
};
var defaultSuggestionsFilter$1 = defaultSuggestionsFilter;

export default index;
export {
  MentionSuggestions,
  addMention,
  defaultSuggestionsFilter$1 as defaultSuggestionsFilter,
  defaultTheme,
};
