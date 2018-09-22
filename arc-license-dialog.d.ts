/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   arc-license-dialog.html
 */

/// <reference path="../polymer/types/polymer-element.d.ts" />
/// <reference path="../paper-dialog/paper-dialog.d.ts" />
/// <reference path="../paper-dialog-scrollable/paper-dialog-scrollable.d.ts" />
/// <reference path="../paper-button/paper-button.d.ts" />
/// <reference path="arc-license-content.d.ts" />

declare namespace UiElements {

  /**
   * A license information dialog for ARC.
   *
   * If any instance of ARC uses additional libraries that its license should be
   * included then it accepts children as a license.
   *
   *
   * ## Example
   *
   * ```html
   * <arc-license-dialog opened>
   *  <section>
   *    <h3>Additional license</h3>
   *    <p>Text of the license</p>
   *  </section>
   * </arc-license-dialog>
   * ```
   *
   * ## Styling
   *
   * Custom property | Description | Default
   * ----------------|-------------|----------
   * `--arc-license-dialog` | Mixin applied to this elment | `{}`
   */
  class ArcLicenseDialog extends Polymer.Element {

    /**
     * Set to open the dialog
     */
    opened: boolean|null|undefined;
  }
}

interface HTMLElementTagNameMap {
  "arc-license-dialog": UiElements.ArcLicenseDialog;
}
