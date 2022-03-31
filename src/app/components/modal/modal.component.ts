import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal-content',
    template: `
    <div class="modal-header">
        <h5 class="modal-title text-center">Aviso de Privacidad</h5>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body"> Muy lejos, tras las montañas de la palabra, lejos de los países Vokalia y Consonantia, viven los textos ciegos. Separados, viven en Bookmarksgrove, justo en la costa de la Semántica, un gran océano lingüístico. Un pequeño río llamado Duden fluye junto a su lugar y lo abastece de la regelialia necesaria. Es un país paradisíaco, en el que las partes tostadas de las frases vuelan hasta la boca. Incluso el todopoderoso Pointing no tiene ningún control sobre los textos ciegos es una vida casi no ortográfica Un día, sin embargo, una pequeña línea de texto ciego con el nombre de Lorem Ipsum decidió partir hacia el lejano Mundo de la Gramática.
    </div>
    <div class="modal-footer">
        <div class="left-side">
            <button type="button" class="btn btn-default btn-link" (click)="activeModal.close('Close click')">Aceptar</button>
        </div>
        <div class="divider"></div>
        <div class="right-side">
            <!--<button type="button" class="btn btn-danger btn-link" (click)="activeModal.close('Close click')">DELETE</button>-->
        </div>
    </div>
    `
})
export class NgbdModalContent {
    @Input() name;

    constructor(public activeModal: NgbActiveModal) {}
}

@Component({
    selector: 'app-modal-component',
    templateUrl: './modal.component.html'
})
export class NgbdModalComponent {
    constructor(private modalService: NgbModal) {}
    open() {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    }
}
