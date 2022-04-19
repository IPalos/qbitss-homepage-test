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
    <div class="modal-body"> Para Qbitss S.A. DE C.V., (en lo sucesivo “Qbitss”) empresa de nacionalidad mexicana constituida conforme a las leyes de los Estados Unidos Mexicanos, el tratamiento legítimo, controlado e informado de sus datos personales es de vital importancia para alcanzar los objetivos como empresa a través de todas las áreas de la misma, reiterando nuestro compromiso y respeto con el derecho a la privacidad y a la autodeterminación informativa de las personas, atendiendo a los principios de licitud, consentimiento, calidad, información, finalidad, lealtad, proporcionalidad y responsabilidad.
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
